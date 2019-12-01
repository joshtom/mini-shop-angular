import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() getShoppingList = new EventEmitter<Ingredient[]>();
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    
  }
  onAddToShoppingList(){
    this.getShoppingList.emit(this.recipe.ingredient);
    
  }

}
