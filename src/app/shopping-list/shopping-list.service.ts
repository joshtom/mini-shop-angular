import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  @Output() ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Maggi', 300),
    new Ingredient('Gino', 70),
  ];
  getIngredients() {
    // Return a copy of the array of ingredients
    return this.ingredients.slice();
  }
  
  // Method to add a new ingredient
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients);
  }
 
  constructor() { }
}
 