import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },  
    { path: 'recipe', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    // { path: '**', component: Error404Component }
  ];

  @NgModule({
      imports: [RouterModule.forRoot(appRoutes)],
      exports: [RouterModule]
  })

  export class AppRoutingModule {}