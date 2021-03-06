import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendRequestService } from '../backend-request.service';
import { SessionDetailsService } from '../session-details.service';
import { Category } from './_models/category.model';
import { Clue } from './_models/clue.model';

@Component({
  selector: 'app-submit-category',
  templateUrl: './submit-category.component.html',
  styleUrls: ['./submit-category.component.css'],
})
export class SubmitCategoryComponent implements OnInit {
  values: number[] = [200, 400, 600, 800, 1000];

  handleCategoryNameChange() {
    this.updateFlipCards(this.getCategoryFieldText());
  }

  updateFlipCards(newContent: string) {
    for (let flipCard of this.getFlipCards()) {
      if (newContent == '' || newContent == null) {
        newContent = '​​';
      }
      flipCard.innerHTML = newContent;
    }
  }

  getCategoryFieldText() {
    let categoryField: HTMLInputElement = document.getElementById(
      'categoryField'
    ) as HTMLInputElement;
    return categoryField.value;
  }

  getFlipCards() {
    return Array.from(
      document.getElementsByClassName('category')
    ) as HTMLElement[];
  }

  handleClueTextChange(value: number) {
    let clueTextDiv: HTMLElement = document.getElementById(
      'clueText' + value
    ) as HTMLElement;

    let newClueText: string = (
      document.getElementById('clueTextField' + value) as HTMLInputElement
    ).value;

    if (newClueText == '' || newClueText == null) {
      newClueText = '​​';
    }

    clueTextDiv.innerHTML = newClueText;
  }

  handleAnswerTextChange(value: number) {
    let answerTextDiv: HTMLElement = document.getElementById(
      'answerText' + value
    ) as HTMLElement;

    let newAnswerText: string = (
      document.getElementById('answerTextField' + value) as HTMLInputElement
    ).value;

    if (newAnswerText == '' || newAnswerText == null) {
      newAnswerText = '​​';
    }

    answerTextDiv.innerHTML = newAnswerText;
  }

  category = new Category(sessionStorage.getItem('user_id') as string, '', [
    new Clue('', '', 200),
    new Clue('', '', 400),
    new Clue('', '', 600),
    new Clue('', '', 800),
    new Clue('', '', 1000),
  ]);

  handleCategorySubmit() {
    // Check if form is completed
    let isValid: boolean = document
      .getElementById('submitCategoryForm')
      ?.classList.contains('ng-valid') as boolean;
    // Only proceed if form is completed
    if (isValid) {
      this.backendService
        .post(
          this.backendService.getPHPBaseURL() +
            'submit-category/submit-category.php',
          JSON.stringify(this.category)
        )
        .subscribe((data) => {
          if (data['Message'] == 'Success!') {
            this.router.navigate(['']);
          } else {
            console.log(data);
          }
        });
    }
  }

  constructor(
    private sessionDetails: SessionDetailsService,
    private backendService: BackendRequestService,
    private router: Router
  ) {}

  ngOnInit() {
    // Force redirect to login if session is invalid
    this.sessionDetails.checkValidSession();
    this.updateFlipCards('Category Name');
  }
}
