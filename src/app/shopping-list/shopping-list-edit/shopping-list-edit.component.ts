import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  standalone: true,
  imports: [],
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent implements AfterViewInit {
  @ViewChild('nameInput') nameInputRef: ElementRef | undefined;
  @ViewChild('priceInput') priceInputRef: ElementRef | undefined;
  @ViewChild('amountInput') amountInputRef: ElementRef | undefined;
  @Output() ingredientAdded = new EventEmitter<{name: string, price: number, amount: number}>();

  constructor() {}

  ngAfterViewInit(){
    this.nameInputRef = this.nameInputRef as ElementRef;
    this.priceInputRef = this.priceInputRef as ElementRef;
  }

  onAddItem(event: Event) {
    event.preventDefault()
    const newIngredient =
      {
        name: this.nameInputRef?.nativeElement.value,
        price: this.priceInputRef?.nativeElement.value,
        amount: this.amountInputRef?.nativeElement.value
      }
    this.ingredientAdded.emit(newIngredient)
  }
}
