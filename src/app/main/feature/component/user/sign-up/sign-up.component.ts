import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UsersService,) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() {
    return this.signUpForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return true;
    }

    this.userService.signUp(this.f.userName.value, this.f.name.value, this.f.password.value)
      .subscribe(
        data => {
          alert('hh')
          this.router.navigate(['']);
         /* const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          Toast.fire({type: 'success', title: 'Sign Up in successfully'});*/
        },
        error => {
          if (error.status === 400) {
            this.router.navigate(['']);
          }
          if (error.status === 500) {
          }
        });
  }

}
