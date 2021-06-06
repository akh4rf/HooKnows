import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  fourthButtonDest = '';
  fourthButtonText = '';

  constructor() {}

  ngOnInit(): void {
    // Check if logged in
    if (
      sessionStorage.getItem('session_id') != null &&
      sessionStorage.getItem('user_id') != null
    ) {
      this.fourthButtonDest = '/profile';
      this.fourthButtonText = 'Profile';
    } else {
      this.fourthButtonDest = '/login-register';
      this.fourthButtonText = 'Login/Register';
    }
  }
}
