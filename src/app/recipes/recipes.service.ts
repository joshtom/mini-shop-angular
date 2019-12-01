import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Sausage', 
    'Sausage Shrimp & Chicken', 
    'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-3-1.jpg',
    [
      new Ingredient('Maggi', 10),
      new Ingredient('Chicken', 1)
    ]
    ),
    new Recipe('Eggplant Parmesan',
     'This is my favorite way to make eggplant parmesan', 
     'https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg',
     [
       new Ingredient('Parmesan', 5),
       new Ingredient('Eggplant', 10),
     ]
     )
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
   this.shoppingListService.addIngredient(ingredients);
  }
}
 