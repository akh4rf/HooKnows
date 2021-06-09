import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendRequestService } from '../backend-request.service';
import { SessionDetailsService } from '../session-details.service';
import { Feedback } from './_models/feedback.models';

@Component({
  selector: 'submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.css'],
})
export class SubmitFeedbackComponent implements OnInit {
  feedback = new Feedback('', 0);

  handleSubmitFeedback() {
    let isValid: boolean = document
      .getElementById('feedbackForm')
      ?.classList.contains('ng-valid') as boolean;
    if (isValid) {
      window.location.href =
        this.backendService.getPHPBaseURL() +
        'submit-feedback/submit-feedback.php' +
        '?name=' +
        this.feedback.name +
        '&rating=' +
        this.feedback.rating;
    }
  }

  constructor(
    private sessionDetails: SessionDetailsService,
    private router: Router,
    private backendService: BackendRequestService
  ) {}

  ngOnInit(): void {
    // Force redirect to login if session is invalid
    this.sessionDetails.checkValidSession();
  }
}
