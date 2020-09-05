import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService{
   recipesChanged=new Subject<Recipe[]>();
 //private recipes: Recipe[] =[
       // new Recipe(
        //    'A Test Recipe' ,
          //  'This is Simply a test' ,
            //'https://img.taste.com.au/lBkXelJZ/w643-h428-cfill-q90/taste/2018/02/mar-18_creamy-fettuccine-with-chicken-3000x2000-135690-1.jpg',
           // [
               // new Ingredient('Meat' ,1),
             //   new Ingredient('french fries', 20)

           // ]),
      //  new Recipe(
        //    'Another Test Recipe' ,
          //  'This is Simply a test' ,
         //   'https://img.taste.com.au/lBkXelJZ/w643-h428-cfill-q90/taste/2018/02/mar-18_creamy-fettuccine-with-chicken-3000x2000-135690-1.jpg',
         //   [
         //       new Ingredient('Buns' ,2),
         //       new Ingredient('MEAT' ,1)
       //     ])
      // ];
      private recipes:Recipe[]= [];

       constructor(private slService: ShoppingListService){}

      setRecipes(recipes: Recipe[]){
          this.recipes=recipes;
          this.recipesChanged.next(this.recipes.slice());
      }

       getRecipes() {
           return this.recipes.slice();
       }

       getRecipe(index: number){
        return this.recipes[index];
       } 

       addIngredientsToShoppingList(ingredients: Ingredient[]) {
     this.slService.addIngredients(ingredients);
       }

       addRecipe(recipe: Recipe){
         this.recipes.push(recipe);
         this.recipesChanged.next(this.recipes.slice());
       }

       updateRecipe(index: number,newRecipe: Recipe){
          this.recipes[index]=newRecipe;
          this.recipesChanged.next(this.recipes.slice());
       }

       deleteRecipe(index: number){
           this.recipes.splice(index,1);
           this.recipesChanged.next(this.recipes.slice());
       }
}