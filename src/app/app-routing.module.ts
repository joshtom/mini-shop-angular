import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },  
    { path: 'recipe', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        // Note that all components must come before any dynamic component
        { path: 'new', component: RecipeEditComponent }, 
        // Dynamic components should follow each other
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    // { path: '**', component: Error404Component }
  ];

  @NgModule({
      imports: [RouterModule.forRoot(appRoutes)],
      exports: [RouterModule]
  })

  export class AppRoutingModule {}