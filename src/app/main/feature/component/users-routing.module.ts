import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {RecipeViewRatingComponent} from './recipeMenu/customerview/recipe-view-rating/recipe-view-rating.component';
import {HomeComponent} from './recipeMenu/deshboard/home/home.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'recipe-view', component: RecipeViewRatingComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
