import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe1',
    'This is simply a test1',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    , [
      new Ingredient('test1', 1),
      new Ingredient('test2', 2)
    ]),
    new Recipe('A Test Recipe2',
    'This is simply a test2',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    , [
      new Ingredient('test3', 3),
      new Ingredient('test4', 4)
    ])
  ];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  addToShoppingList(ingredients: in) {
    
  }
}
