import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];
  constructor() {}
}
