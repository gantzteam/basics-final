import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';

const appRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent},
    { path: 'shopping-list', component: shopp}

];

@NgModule({

})
export class AppRoutingModule {}
