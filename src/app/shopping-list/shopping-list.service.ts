import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Maggi', 300),
    new Ingredient('Gino', 70),
  ];
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
   }
  constructor() { }
}
