import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {IngredientService} from "../shared/ingredient.service";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    NgIf
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Map<Ingredient, number> = new Map<Ingredient, number>();

  constructor(private ingredientService: IngredientService) {}

  ngOnInit() {
    this.ingredientService.addedIngredients$.subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  getTotalPrice(): number{
    let total = 0
    for(let entry of this.ingredients.entries()){
      let price = entry[0].pricePerItem
      let ammount = entry[1]

      total += price * ammount
    }
    return total
  }

  onSubtractIngredient(ingredient: Ingredient){
    this.ingredientService.subtractIgredient(ingredient);
  }

  onIncrementIngredient(ingredient: Ingredient){
    this.ingredientService.incrementIgredient(ingredient);
  }

  onDeleteIngredient(ingredient: Ingredient){
    this.ingredientService.deleteIngredient(ingredient);
  }
}
