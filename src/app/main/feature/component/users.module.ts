import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';

import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { RecipeViewRatingComponent } from './recipeMenu/customerview/recipe-view-rating/recipe-view-rating.component';
import { HomeComponent } from './recipeMenu/deshboard/home/home.component';
import { RecipeCreateComponent } from './recipeMenu/deshboard/recipe-create/recipe-create.component';
import { WeeklyMenuCreateComponent } from './recipeMenu/deshboard/weekly-menu-create/weekly-menu-create.component';
import { RecipeListComponent } from './recipeMenu/deshboard/recipe-list/recipe-list.component';
import { RecipeUpdateComponent } from './recipeMenu/deshboard/recipe-update/recipe-update.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { WeeklyMenuListComponent } from './recipeMenu/deshboard/weekly-menu-list/weekly-menu-list.component';
import { WeeklyListUpdateComponent } from './recipeMenu/deshboard/weekly-list-update/weekly-list-update.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    RecipeViewRatingComponent,
    HomeComponent,
    RecipeCreateComponent,
    WeeklyMenuCreateComponent,
    RecipeListComponent,
    RecipeUpdateComponent,
    WeeklyMenuListComponent,
    WeeklyListUpdateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    NgbModule
  ]
})
export class UsersModule {
}
