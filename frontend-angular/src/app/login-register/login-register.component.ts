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
      this.service
        .post('http://localhost:80/login/login.php', JSON.stringify(this.user))
        .subscribe((data) => {
          if (data['Message'] == 'Successfully Logged In!') {
            sessionStorage.setItem('user_id', data['Data']['username']);
            sessionStorage.setItem('session_id', data['Data']['SESSION_ID']);
            this.router.navigate(['']);
          } else {
            console.log(data['Message']);
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
      this.service
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
            console.log(data['Message']);
          }
        });
      //
    }
  }

  constructor(private service: BackendRequestService, private router: Router) {}

  ngOnInit(): void {
    // Force redirect to main menu if session exists
    if (
      sessionStorage.getItem('session_id') != null &&
      sessionStorage.getItem('user_id') != null
    ) {
      this.router.navigate(['']);
    } else {
      sessionStorage.clear();
    }
  }
}
