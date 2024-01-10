import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {NgForOf, NgIf} from "@angular/common";
import {Ingredient} from "../../shared/ingredient.model";
import {IngredientService} from "../../shared/ingredient.service";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe | null = null;

  constructor(private ingredientService: IngredientService) {}

  onIngredientsAdded(ingredients: Map<Ingredient, number>) {
    this.ingredientService.addIngredients(ingredients);
  }
}
