
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LocalstorageService } from '../../services/localstorage.service';
import { User } from '../../models/user';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'users-register',
  templateUrl: './register.component.html',

})


  export class RegisterComponent implements OnInit {
    RegisterFormGroup: FormGroup;
    isSubmitted = false;
    authError = false;
    authMessage = 'registration not done';
  users: User;

    constructor(
      private formBuilder: FormBuilder,
      private auth: AuthService,
      private localstorageService: LocalstorageService,
      private router: Router
    ) {}

    ngOnInit(): void {
      this._initLoginForm();
    }

    private _initLoginForm() {
      this.RegisterFormGroup = this.formBuilder.group({

        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        name:['',[Validators.required]],
        phone: ['', Validators.required]
      });
    }

    onSubmit() {
      this.isSubmitted = true;

      if (this.RegisterFormGroup.invalid) return;

      this.auth.Register(this.RegisterForm.email.value,this.RegisterForm.password.value,this.RegisterForm.name.value,this.RegisterForm.phone.value).subscribe(
        (user) => {
          this.authError = false;
          this.localstorageService.setToken(user.token);
          this.router.navigate(['/login']);
        },
        (error: HttpErrorResponse) => {
          this.authError = true;
          if (error.status !== 400) {
            this.authMessage = 'Error in the Server, please try again later!';
          }
        }
      )
    }

    get RegisterForm() {
      return this.RegisterFormGroup.controls;
    }
  }


