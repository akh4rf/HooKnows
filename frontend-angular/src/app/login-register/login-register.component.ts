import { Component, OnInit } from '@angular/core';
import { User } from './_models/user.model';
import { BackendRequestService } from '../backend-request.service';
import { Router } from '@angular/router';

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

    let fromTab: HTMLElement = document.getElementById(from) as HTMLElement;
    let toTab: HTMLElement = document.getElementById(to) as HTMLElement;

    let tab: HTMLElement = document.getElementById(
      'LoginRegisterTab'
    ) as HTMLElement;

    if (toForm.classList.contains('display-none')) {
      toForm.classList.toggle('display-none');
      fromForm.classList.toggle('display-none');
      tab.classList.toggle('right');
      fromTab.classList.toggle('blue-text');
      toTab.classList.toggle('blue-text');

      if (!this.errorDiv.classList.contains('display-none')) {
        this.errorDiv.classList.toggle('display-none');
      }
    }
  }

  handleLogin() {
    let isValid: boolean = document
      .getElementById('loginForm')
      ?.classList.contains('ng-valid') as boolean;
    // Only proceed if form is completed
    if (isValid) {
      this.backendService
        .post('http://localhost:80/login/login.php', JSON.stringify(this.user))
        .subscribe((data) => {
          if (data['Message'] == 'Successfully Logged In!') {
            sessionStorage.setItem('user_id', data['Data']['username']);
            sessionStorage.setItem('session_id', data['Data']['SESSION_ID']);
            this.router.navigate(['']);
          } else {
            this.updateErrorMessage(data['Message']);
          }
        });
    }
  }

  handleRegister() {
    let isValid: boolean = document
      .getElementById('registerForm')
      ?.classList.contains('ng-valid') as boolean;
    // Only proceed if form is completed
    if (isValid) {
      this.backendService
        .post(
          'http://localhost:80/register/register.php',
          JSON.stringify(this.user)
        )
        .subscribe((data) => {
          if (data['Message'] == 'Successfully Registered!') {
            sessionStorage.setItem('user_id', data['Data']['username']);
            sessionStorage.setItem('session_id', data['Data']['SESSION_ID']);
            this.router.navigate(['']);
          } else {
            this.updateErrorMessage(data['Message']);
          }
        });
      //
    }
  }

  updateErrorMessage(message: string) {
    this.errorDiv.innerText = message;
    if (this.errorDiv.classList.contains('display-none')) {
      this.errorDiv.classList.toggle('display-none');
    }
  }

  errorDiv: HTMLElement = document.getElementById(
    'errorMessage'
  ) as HTMLElement;

  constructor(
    private backendService: BackendRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Force redirect to main menu if session exists
    if (
      sessionStorage.getItem('session_id') != null &&
      sessionStorage.getItem('user_id') != null
    ) {
      this.router.navigate(['']);
    } else {
      sessionStorage.clear();
      this.errorDiv = document.getElementById('errorMessage') as HTMLElement;
    }
  }
}
