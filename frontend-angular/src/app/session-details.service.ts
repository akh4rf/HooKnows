import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SessionDetailsService {
  isLoggedIn() {
    return (
      sessionStorage.getItem('session_id') != null &&
      sessionStorage.getItem('user_id') != null
    );
  }

  getCurrentUser() {
    if (this.isLoggedIn()) {
      return sessionStorage.getItem('user_id') as string;
    } else {
      return '';
    }
  }

  getSessionStatus() {
    let isLoggedIn = this.isLoggedIn();
    let notExpired =
      Math.floor(Date.now() / 1000) <
      parseInt(sessionStorage.getItem('expiration') as string);

    if (isLoggedIn && notExpired) {
      return 1;
    } else if (isLoggedIn && !notExpired) {
      return 2;
    } else {
      return 3;
    }
  }

  checkValidSession() {
    let message = '';
    switch (this.getSessionStatus()) {
      case 1:
        message = 'valid_session';
        break;
      case 2:
        message = 'session_expired';
        break;
      case 3:
        message = 'login_required';
        break;
    }

    sessionStorage.clear();
    this.router.navigate(['/login-register/' + message]);
    return false;
  }

  constructor(private router: Router) {}
}
