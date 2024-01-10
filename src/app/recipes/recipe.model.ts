import {Ingredient} from "../shared/ingredient.model";

export class Recipe{
  public name: string
  public description: string
  public imagePath: string
  public ingredients: Map<Ingredient, number>

  constructor(name:string, description:string, imagePath:string, ingredients: Map<Ingredient, number>){
    this.name = name
    this.description = description
    this.imagePath = imagePath
    this.ingredients = ingredients
  }
}
