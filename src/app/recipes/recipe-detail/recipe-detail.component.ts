import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  @Input() id: number;
  edit: string;
  
  constructor(private recipeService: RecipesService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // Subscribing to the route for changes in the id
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id']; // Converting the string to number with + sign
        this.edit = "edit";
        this.recipe = this.recipeService.getRecipe(this.id); // Fetching the recipe whenever the recipe changes
      }
    )
    
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
    
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // More complex that can also be used
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

}
