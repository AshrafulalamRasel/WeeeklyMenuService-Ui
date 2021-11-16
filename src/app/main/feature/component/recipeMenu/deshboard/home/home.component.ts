import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../../../share/services/auth.service";

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

  gotoAddNewNoteForm(): void {

    this.router.navigate(['home/add-new-diary']);
  }

  gotoAddNewMoreCategories(): void {
    this.router.navigate(['home/categories']);
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['']);
  }
}
