import { Component, OnInit } from '@angular/core';
import { User } from './_models/user.model';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent implements OnInit {
  user = new User('', '', '', '');

  switchTabs(from: string, to: string) {
    let fromForm: HTMLElement = document.getElementById(
      from + 'Content'
    ) as HTMLElement;
    let toForm: HTMLElement = document.getElementById(
      to + 'Content'
    ) as HTMLElement;

    if (toForm.classList.contains('display-none')) {
      toForm.classList.toggle('display-none');
      fromForm.classList.toggle('display-none');
    }
  }

  handleLogin() {
    let isValid: boolean = document
      .getElementById('loginForm')
      ?.classList.contains('ng-valid') as boolean;
    // Only proceed if form is completed
    if (isValid) {
      console.log(this.user);
    }
  }

  handleRegister() {
    let isValid: boolean = document
      .getElementById('registerForm')
      ?.classList.contains('ng-valid') as boolean;
    // Only proceed if form is completed
    if (isValid) {
      console.log(this.user);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
