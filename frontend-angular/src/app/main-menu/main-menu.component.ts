import { Component, OnInit } from '@angular/core';
import { SessionDetailsService } from '../session-details.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  fourthButtonDest = '';
  currentUser = '';

  constructor(private sessionDetails: SessionDetailsService) {}

  sessionStatus = 0;

  ngOnInit(): void {
    // Check if logged in
    this.sessionStatus = this.sessionDetails.getSessionStatus();
    if (this.sessionStatus == 1) {
      this.fourthButtonDest = '/profile';
      this.currentUser = this.sessionDetails.getCurrentUser();
      document.getElementById('logout')?.classList.toggle('display-none');
    } else {
      sessionStorage.clear();
      this.fourthButtonDest = '/login-register';
    }
  }
}
