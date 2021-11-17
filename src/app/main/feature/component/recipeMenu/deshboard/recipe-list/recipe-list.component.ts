import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../model/recipe.model';
import {RecipeService} from '../../../services/recipe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeModelList: RecipeModel[] = new Array();

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.getRecipeList();
  }


  public getRecipeList() {
    this.recipeModelList = [];
    this.recipeService.getRecipeList(0).subscribe(res => {
      res.items.forEach((itemList: any) => {
        this.recipeModelList.push(itemList);
      });
    });
  }

  editCategoryById(id: any) {
    this.router.navigate(['/home/recipe-list-update-by' + '/' + id]);
  }
  deleteCategoryById(id: any) {
    alert('ready to delete');
  }
}
