import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeeklyService {

  private createWeeklyMenuApi = environment.weeklyMenuPlanning + 'api/weekly/menu/create';
  private fetchAllWeeklyMenu = environment.weeklyMenuPlanning + 'api/weekly/menu/fetchAll/';
  private getAllWeeklyMenuById = environment.weeklyMenuPlanning + 'api/weekly/menu/';
  private updateAllWeeklyMenuById = environment.weeklyMenuPlanning + 'api/weekly/menu/updateBy/';
  private deleteAllWeeklyMenuById = environment.weeklyMenuPlanning + 'api/weekly/menu/deleteBy/';


  constructor(private http: HttpClient) {
  }

  public createWeeklyMenu(weekname: string, descriptioN: string,
                          recipeIdlist: []) {
    return this.http.post<any>(this.createWeeklyMenuApi, {
      weekName: weekname,
      description: descriptioN,
      recipeIdList: recipeIdlist
    })
      .pipe(map(res => {
        console.log(res);
        return res;
      }));

  }

  public getMenuList(pageNo: number): Observable<any> {
    return this.http.get(this.fetchAllWeeklyMenu + pageNo)
      .pipe(map(res => res));
  }

  public getWeeklyRecipeById(weeklyId: string): Observable<any> {
    return this.http.get(this.getAllWeeklyMenuById + weeklyId).pipe(map(res => res));
  }

  public updateWeeklyAndRecipeById(
    weekId: string,
    recipeId: string,
    weekname: string,
    descriptioN: string,
    recipename: string,
    recipeingredients: string,
    recipeinstruction: string,
    nutritionalinformation: string,
    classificatioN: string
  ): Observable<any> {
    return this.http.put(this.updateAllWeeklyMenuById + weekId + '/recipeBy/' + recipeId, {

        weekName: weekname,
        description: descriptioN,
        recipeList: [{
          recipeName: recipename,
          recipeIngredients: recipeingredients,
          recipeInstruction: recipeinstruction,
          nutritionalInformation: nutritionalinformation,
          classification: classificatioN
        }]
      },
    );
  }

  public allWeekLyAndRecipeDeleteById(weeklyId: string): Observable<any> {
    return this.http.delete(this.deleteAllWeeklyMenuById + weeklyId).pipe(map(res => res));
  }

}
