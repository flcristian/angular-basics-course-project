import {Component, Input, OnInit} from '@angular/core';
import {ShoppingListEditComponent} from "./shopping-list-edit/shopping-list-edit.component";
import {Ingredient} from "../shared/ingredient.model";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {IngredientService} from "../shared/ingredient.service";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    ShoppingListEditComponent,
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
}
