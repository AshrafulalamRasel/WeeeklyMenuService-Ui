import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TokenInterceptor} from './main/share/auth/token.interceptor';
import {AuthGuard} from './main/share/auth/auth.guard';
import {ToastComponentComponent} from './main/share/component/toast-component/toast-component.component';
import {FeaturesModule} from './main/feature/features.module';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";


@NgModule({
  declarations: [
    AppComponent,
    ToastComponentComponent
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    NgbModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [HttpClient, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
