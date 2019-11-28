import { Injectable, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  @Output() IngredientEnter = new EventEmitter<Ingredient>()
  private ingredients: Ingredient[] = [
    new Ingredient('Maggi', 300),
    new Ingredient('Gino', 70),
  ];
  getIngredients() {
    // Return a copy of the array of ingredients
    return this.ingredients.slice();
  }
 
  constructor() { }
}
 