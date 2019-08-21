import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  recipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  getRecipe(id){
    this.recipe = this.recipesService.getRecipe(id);
    var obj = {id: this.recipe.id , imageUrl: this.recipe.imageUrl, ingredients: this.recipe.ingredients, title: this.recipe.title}
    console.log(obj)
  }
}
