import {Component, Output, EventEmitter} from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {Recipe} from "../recipe.model";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg"),
    new Recipe("Another Recipe", "This is simply a test", "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg"),
    new Recipe("The Third Recipe", "This is simply a test", "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg")
  ];

  OnRecipeClick(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
