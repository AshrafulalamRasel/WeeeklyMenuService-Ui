import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private createRecipeApi = environment.weeklyMenuPlanning + 'api/recipe/create';
  private getAllRecipeListApi = environment.weeklyMenuPlanning + 'api/recipe/fetchAll/';
  private getRecipeApiById = environment.weeklyMenuPlanning + 'api/recipe/';
  private updateRecipeApi = environment.weeklyMenuPlanning + 'api/recipe/updateBy/';

  constructor(private http: HttpClient) {
  }

  public updateRecipeById(
                   recipeId: string,
                   recipename: string,
                   recipeingredients: string,
                   recipeinstruction: string,
                   nutritionalinformation: string,
                   classificatioN: string
  ): Observable<any>{
    return this.http.put(this.updateRecipeApi + recipeId, {
      recipeName: recipename,
      recipeIngredients: recipeingredients,
      recipeInstruction: recipeinstruction,
      nutritionalInformation: nutritionalinformation,
      classification: classificatioN
      },
    );
  }

  public getRecipeList(pageNo: number): Observable<any> {
    return this.http.get(this.getAllRecipeListApi + pageNo)
      .pipe(map(res => res));
  }
  public createRecipe(recipename: string,
                      recipeingredients: string,
                      recipeinstruction: string,
                      nutritionalinformation: string,
                      classificatioN: string) {
    return this.http.post<any>(this.createRecipeApi, {
      recipeName: recipename,
      recipeIngredients: recipeingredients,
      recipeInstruction: recipeinstruction,
      nutritionalInformation: nutritionalinformation,
      classification: classificatioN
    })
      .pipe(map(res => {
        console.log(res);
        return res;
      }));

  }

  public getRecipeById(recipeId: string): Observable<any> {
    return this.http.get(this.getRecipeApiById + recipeId).pipe(map(res => res));
  }
}
