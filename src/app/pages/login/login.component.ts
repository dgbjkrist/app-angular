import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  emailValidation = new FormControl('', [Validators.required, Validators.email]);
  email = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.emailValidation.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailValidation.hasError('email') ? 'Not a valid email' : '';
  }

  login() {

  }
}
