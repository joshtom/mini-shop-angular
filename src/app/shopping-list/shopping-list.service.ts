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
    //Emitting a copy of the original array of ingredients
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // Commented out to avoid too much unnecessary emittion
    // for(let ingredient of ingredients) {
    //   this.addIngredient(ingredient)
    // } 
    /*
    . Directly adding all events in one goal and emitting it
    . Use ES6 spread operator that turns array of element to list of elements
     */
     this.ingredients.push(...ingredients);
     this.ingredientChanged.emit(this.ingredients.slice());
     
  }
}
 