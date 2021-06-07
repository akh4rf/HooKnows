import { Component, OnInit } from '@angular/core';
import { SessionDetailsService } from '../session-details.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  fourthButtonDest = '';
  fourthButtonText = '';
  currentUser = '';

  constructor(private sessionDetails: SessionDetailsService) {}

  ngOnInit(): void {
    // Check if logged in
    if (this.sessionDetails.isLoggedIn()) {
      this.fourthButtonDest = '/profile';
      this.fourthButtonText = 'Profile';
      this.currentUser = this.sessionDetails.getCurrentUser();
      document.getElementById('logout')?.classList.toggle('display-none');
    } else {
      this.fourthButtonDest = '/login-register';
      this.fourthButtonText = 'Login/Register';
    }
  }
}
