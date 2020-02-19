import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'SZNYCEL',
      imageUrl: 'https://thecozyapron.com/wp-content/uploads/2012/02/schnitzel_thecozyapron_1.jpg',
      ingredients: ['french fries', 'pork', 'salad']
    },
    {
      id: '2',
      title: 'Spaghetti Bolognese',
      imageUrl: 'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/proste-spaghetti-bolognese.jpg',
      ingredients: ['meat', 'noodles', 'cheese']
    },
  ];


  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return{
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }
}

