import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe | null = null;
}
