import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes:Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/05/gado-gado-salad.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://awsimages.detik.net.id/visual/2017/06/07/0973863a-f248-4d5d-85a7-a4196647eb33_169.jpg?w=650',
      ingredients: ['Beras', 'Daun Pisang', 'Air', 'Sagu']
    },
    {
      id: 'r3',
      title: 'Pizza Margerita',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShz2d74e-blwW5pObXBVAX2S_TdlK22KNqjuMmNyaafmdy4aBevg',
      ingredients: ['Tepung Terigu', 'Telur', 'Baking Powder', 'Keju', 'Tomat']
    }
  ];
  constructor() { }
  
  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return{
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string){
    console.log("Start");
        
    const recipeArr = this.recipes.findIndex(recipe => {
        return (recipeId === recipe.id);
    });
    if (-1 != recipeArr) {
        this.recipes.splice(recipeArr, 1);
    }    
  }
}
