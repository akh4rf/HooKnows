import { Injectable } from '@angular/core';

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

  constructor() {}
}
