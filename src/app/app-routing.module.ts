import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

const appRoutes: Routes = [
    { path: '/', redirectTo: '/recipes' },
    { path: 'recipe', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
    // { path: '**', component: Error404Component }
  ];

  @NgModule({
      imports: [RouterModule.forRoot(appRoutes)],
      exports: [RouterModule]
  })

  export class AppRoutingModule {}