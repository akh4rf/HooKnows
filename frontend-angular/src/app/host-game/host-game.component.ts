import { Component, OnInit } from '@angular/core';
import { SessionDetailsService } from '../session-details.service';

@Component({
  selector: 'app-host-game',
  templateUrl: './host-game.component.html',
  styleUrls: ['./host-game.component.css'],
})
export class HostGameComponent implements OnInit {
  constructor(private sessionDetails: SessionDetailsService) {}

  ngOnInit() {
    // Force redirect to login if session is invalid
    this.sessionDetails.checkValidSession();
  }
}
