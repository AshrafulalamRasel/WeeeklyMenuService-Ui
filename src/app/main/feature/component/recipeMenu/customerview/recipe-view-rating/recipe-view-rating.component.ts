import { Component, OnInit } from '@angular/core';
import {WeekMenuModel} from '../../deshboard/model/week-menu.model';
import {WeeklyService} from '../../../services/weekly.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-view-rating',
  templateUrl: './recipe-view-rating.component.html',
  styleUrls: ['./recipe-view-rating.component.css']
})
export class RecipeViewRatingComponent implements OnInit {


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
  addingRating(weeklyMenuId: any , recipeId: any){

    alert('Rating Added');
  }
}
