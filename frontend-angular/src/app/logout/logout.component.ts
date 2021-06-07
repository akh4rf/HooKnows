import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendRequestService } from '../backend-request.service';
import { SessionDetailsService } from '../session-details.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  username: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sessionDetails: SessionDetailsService,
    private backendService: BackendRequestService
  ) {}

  handleLogout(username: string) {
    this.backendService
      .post(
        'http://localhost:80/logout/logout.php',
        JSON.stringify({ username: username })
      )
      .subscribe((data) => {
        if (data['Message'] == 'Successfully Logged Out!') {
          sessionStorage.clear();
        } else {
          console.log(data);
        }
      });
  }

  ngOnInit(): void {
    let storedUser: string = sessionStorage.getItem('user_id') as string;
    // Force redirect if no user logged in
    if (!this.sessionDetails.isLoggedIn()) {
      this.router.navigate(['']);
    }
    // Else, check if the logged in user has permission to log out
    else {
      let logoutUser = this.route.snapshot.paramMap.get('username') as string;
      // Check if no user specified
      if (logoutUser == null) {
        logoutUser = storedUser;
      }
      // Log out user
      this.handleLogout(storedUser);
      this.username = logoutUser;
    }
  }
}
