import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() getShoppingList = new EventEmitter<Ingredient[]>();
  constructor() { }

  ngOnInit() {
    
  }
  addToShoppingList(){
    this.getShoppingList.emit(this.recipe.ingredient);
    
  }

}
