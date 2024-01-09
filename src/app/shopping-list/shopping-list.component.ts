import { Component } from '@angular/core';
import {ShoppingListEditComponent} from "./shopping-list-edit/shopping-list-edit.component";
import {Ingredient} from "./ingredient.model";
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    ShoppingListEditComponent,
    NgForOf,
    NgStyle
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 5, 3),
    new Ingredient("Onion", 2, 10)
  ];
}
