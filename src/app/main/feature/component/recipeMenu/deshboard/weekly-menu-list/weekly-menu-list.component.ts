import {Component, OnInit} from '@angular/core';
import {WeekMenuModel} from '../model/week-menu.model';
import {WeeklyService} from '../../../services/weekly.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-weekly-menu-list',
  templateUrl: './weekly-menu-list.component.html',
  styleUrls: ['./weekly-menu-list.component.css']
})
export class WeeklyMenuListComponent implements OnInit {
  pageNo: any;
  page = 2;
  getMenuListData: WeekMenuModel[] = new Array();

  constructor(private weeklyService: WeeklyService, private router: Router) {
  }

  ngOnInit(): void {
    this.getWeeklyList(this.page - 2);
  }

  showPageIndex(page) {
    this.getWeeklyList(page - 1);
  }

  public getWeeklyList(page: number) {
    this.getMenuListData = [];
    this.weeklyService.getMenuList(page).subscribe(res => {
      this.pageNo = res;
      console.log(this.pageNo.totalPages);
      res.items.forEach((recipeList: any) => {
        this.getMenuListData.push(recipeList);
      });
    });
  }

  editCategoryById(weeklyId: any, recipeId: any) {
    this.router.navigate(['/home/weekly-list-update-by' + '/' + weeklyId + '/recipe/' + recipeId]);
  }

  deleteCategoryById(weeklyId: any) {
    this.weeklyService.allWeekLyAndRecipeDeleteById(weeklyId).subscribe(res => {
      this.router.navigate(['/home/weekly-menu-create']);
    });
  }
}
