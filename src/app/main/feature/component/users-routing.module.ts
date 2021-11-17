import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {RecipeViewRatingComponent} from './recipeMenu/customerview/recipe-view-rating/recipe-view-rating.component';
import {HomeComponent} from './recipeMenu/deshboard/home/home.component';
import {RecipeCreateComponent} from './recipeMenu/deshboard/recipe-create/recipe-create.component';
import {AuthGuard} from '../../share/auth/auth.guard';
import {WeeklyMenuCreateComponent} from './recipeMenu/deshboard/weekly-menu-create/weekly-menu-create.component';
import {RecipeListComponent} from './recipeMenu/deshboard/recipe-list/recipe-list.component';
import {RecipeUpdateComponent} from './recipeMenu/deshboard/recipe-update/recipe-update.component';
import {WeeklyMenuListComponent} from './recipeMenu/deshboard/weekly-menu-list/weekly-menu-list.component';
import {WeeklyListUpdateComponent} from './recipeMenu/deshboard/weekly-list-update/weekly-list-update.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'customer/recipe-view', component: RecipeViewRatingComponent},
  {
    path: 'home', redirectTo: 'home/directory'
  },
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'recipe-create', component: RecipeCreateComponent, canActivate: [AuthGuard]},
      {path: 'weekly-menu-create', component: WeeklyMenuCreateComponent, canActivate: [AuthGuard]},
      {path: 'recipe-list-view', component: RecipeListComponent, canActivate: [AuthGuard]},
      {path: 'recipe-list-update-by/:id', component: RecipeUpdateComponent, canActivate: [AuthGuard]},
      {path: 'weekly-menu-list', component: WeeklyMenuListComponent, canActivate: [AuthGuard]},
      {path: 'weekly-list-update-by/:id/recipe/:id2', component: WeeklyListUpdateComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
