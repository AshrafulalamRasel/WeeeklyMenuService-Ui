import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../../../share/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: any = this.authService.getName();

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  gotoAddNewRecipeForm(): void {

    this.router.navigate(['home/recipe-create']);
  }

  gotoAddWeeklyMenu(): void {
    this.router.navigate(['home/weekly-menu-create']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
