import { Injectable} from "@angular/core";
import {BehaviorSubject, Observable, toArray} from "rxjs";
import {Ingredient} from "./ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class IngredientService{
  private addedIngredientsSubject = new BehaviorSubject<Map<Ingredient, number>>(new Map<Ingredient, number>());
  addedIngredients$: Observable<Map<Ingredient, number>> = this.addedIngredientsSubject.asObservable();

  addIngredients(ingredients: Map<Ingredient, number>){
    const newIngredients = this.addedIngredientsSubject.value;
    for (let entry of ingredients){
      newIngredients.set(entry[0], (newIngredients.get(entry[0])! ? newIngredients.get(entry[0])! : 0) + entry[1])
    }
    this.addedIngredientsSubject.next(newIngredients);
  }

  deleteIngredient(ingredient: Ingredient){
    const newIngredients = this.addedIngredientsSubject.value;
    newIngredients.delete(ingredient);
    this.addedIngredientsSubject.next(newIngredients)
  }

  subtractIgredient(ingredient: Ingredient){
    const newIngredients = this.addedIngredientsSubject.value;
    if(newIngredients.get(ingredient) === 1) newIngredients.delete(ingredient)
    else newIngredients.set(ingredient, newIngredients.get(ingredient)! - 1)
    this.addedIngredientsSubject.next(newIngredients)
  }

  incrementIgredient(ingredient: Ingredient){
    const newIngredients = this.addedIngredientsSubject.value;
    newIngredients.set(ingredient, newIngredients.get(ingredient)! + 1)
    this.addedIngredientsSubject.next(newIngredients)
  }
}
