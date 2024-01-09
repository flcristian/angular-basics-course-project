import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeBookComponent} from "./recipes/recipe-book/recipe-book.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item/recipe-item.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingListEditComponent} from "./shopping-list/shopping-list-edit/shopping-list-edit.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RecipesComponent, RecipeBookComponent, RecipeDetailComponent,
    RecipeListComponent, RecipeItemComponent, ShoppingListComponent,
    ShoppingListEditComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
