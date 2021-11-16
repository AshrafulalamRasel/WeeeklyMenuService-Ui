import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';

import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { RecipeViewRatingComponent } from './recipeMenu/customerview/recipe-view-rating/recipe-view-rating.component';
import { HomeComponent } from './recipeMenu/deshboard/home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    RecipeViewRatingComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule {
}
