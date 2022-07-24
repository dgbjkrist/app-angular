import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  loginForm = {
    email : '',
    password : ''
  }

  wrongCredential = false;



  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login() {
    this.wrongCredential = false;
    this.authService.login(this.loginForm.email, this.loginForm.password)
    .subscribe(result => {
      this.router.navigate(['/']);
    }, error => {
      this.wrongCredential = true;
    });
    //console.log(JSON.stringify(this.loginForm))
  }
}
