import {RecipeModel} from './recipe.model';

export class WeekMenuModel {
  id: number | undefined;
  weekName: any | undefined;
  description: string | undefined;
  recipeList: RecipeModel[];
}
