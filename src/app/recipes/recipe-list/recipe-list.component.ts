import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test Description', 'https://p0.pxfuel.com/preview/995/747/603/recipe-dish-lunch-nutrition.jpg'),
    new Recipe('A Test Recipe', 'Test Description', 'https://p0.pxfuel.com/preview/995/747/603/recipe-dish-lunch-nutrition.jpg')
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
