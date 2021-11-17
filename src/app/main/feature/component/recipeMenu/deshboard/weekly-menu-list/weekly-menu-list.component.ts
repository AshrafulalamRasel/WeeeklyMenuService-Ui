import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../../services/recipe.service';
import {WeekMenuModel} from '../model/week-menu.model';
import {WeeklyService} from '../../../services/weekly.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-weekly-menu-list',
  templateUrl: './weekly-menu-list.component.html',
  styleUrls: ['./weekly-menu-list.component.css']
})
export class WeeklyMenuListComponent implements OnInit {
  getMenuListData: WeekMenuModel[] = new Array();
  constructor(private weeklyService: WeeklyService, private router: Router) { }

  ngOnInit(): void {
    this.getWeeklyList();
  }

  public getWeeklyList() {
    this.getMenuListData = [];
    this.weeklyService.getMenuList(0).subscribe(res => {
      res.items.forEach((recipeList: any) => {
        this.getMenuListData.push(recipeList);
      });
    });
  }

  editCategoryById(weeklyId: any , recipeId: any) {
    this.router.navigate(['/home/weekly-list-update-by' + '/' + weeklyId + '/recipe/' + recipeId]);
  }
  deleteCategoryById(weeklyId: any) {
    this.weeklyService.allWeekLyAndRecipeDeleteById(weeklyId).subscribe(res => {
      this.router.navigate(['/home/weekly-menu-create']);
    });
  }

}
