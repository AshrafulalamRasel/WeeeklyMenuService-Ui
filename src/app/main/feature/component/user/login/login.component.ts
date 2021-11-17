import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {AuthTokenHttpService} from '../../../../share/auth/auth-token-http.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UsersService,
              private router: Router,
              private authTokenHttpService: AuthTokenHttpService) { }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return true;
    }
    this.userService.login(this.f.userName.value, this.f.password.value)
      .subscribe(
        data => {
          if (this.authTokenHttpService.getAuthTokenScopes()[0] === 'ROLE_ADMIN') {
            localStorage.setItem('loginType', 'loginAdmin');
            this.router.navigate(['/home']);
          }
          else if (this.authTokenHttpService.getAuthTokenScopes()[0] === 'ROLE_CUSTOMER') {
            localStorage.setItem('loginType', 'loginCustomer');
            this.router.navigate(['customer/recipe-view']);
          }
        },
        error => {

          if (error.status === 403) {
          }
          if (error.status === 500) {
          }
        });
  }

}
