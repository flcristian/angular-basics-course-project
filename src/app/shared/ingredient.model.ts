export class Ingredient{
  constructor(public name: string, public pricePerItem: number){}

  equals(other: Ingredient){
    return this.name === other.name && this.pricePerItem === other.pricePerItem
  }
}
