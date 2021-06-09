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

  checkValidSession() {
    let isLoggedIn = this.isLoggedIn();
    let notExpired =
      Math.floor(Date.now() / 1000) <
      parseInt(sessionStorage.getItem('expiration') as string);

    // Valid Session
    if (isLoggedIn && notExpired) {
      return true;
    }

    // Invalid Session
    else {
      let message = 'login_required';
      if (isLoggedIn && !notExpired) {
        message = 'session_expired';
      }
      sessionStorage.clear();
      this.router.navigate(['/login-register/' + message]);
      return false;
    }
  }

  constructor(private router: Router) {}
}
