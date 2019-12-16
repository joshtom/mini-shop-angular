import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipesService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Subscribing to the route for changes in the id
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id']; // Converting the string to number with + sign
        this.recipe = this.recipeService.getRecipe(this.id); // Fetching the recipe whenever the recipe changes
      }
    )
    
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
    
  }

}
