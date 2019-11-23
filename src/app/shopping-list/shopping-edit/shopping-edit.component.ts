import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }
  ngOnInit() {
  }

  addItem(){
     const ingName = this.nameInputRef.nativeElement.value;
     const ingAmount = this.amountInputRef.nativeElement.value;
     const newIngredient = new Ingredient(ingName, ingAmount);
     this.ingredientAdded.emit(newIngredient);

  }

}
