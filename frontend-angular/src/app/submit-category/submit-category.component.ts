import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-category',
  templateUrl: './submit-category.component.html',
  styleUrls: ['./submit-category.component.css'],
})
export class SubmitCategoryComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {
    this.updateFlipCards('Category Name');
  }
}
