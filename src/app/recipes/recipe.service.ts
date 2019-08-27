import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti with Meat Sauce', 
      'Our favorite weeknight friendly spaghetti recipe', 
      'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
      [
        new Ingredient('Spaghetti', 1),
        new Ingredient('Meat', 1),
        new Ingredient('Tomatoes', 5)
      ]),
    new Recipe(
      'Spaghetti Carbonara', 
      'Another classic', 
      'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
      [
        new Ingredient('Spaghetti', 1),
        new Ingredient('Pancetta', 1),
        new Ingredient('Eggs', 3)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}