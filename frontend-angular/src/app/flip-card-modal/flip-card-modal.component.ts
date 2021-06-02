// Typescript translated from JavaScript from https://www.w3schools.com/howto/howto_css_modals.asp //

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flip-card-modal',
  templateUrl: './flip-card-modal.component.html',
  styleUrls: ['./flip-card-modal.component.css'],
})
export class FlipCardModalComponent implements OnInit {
  @Input() height!: string;
  @Input() width!: string;
  @Input() value!: string;

  // When the user clicks on the button, open the modal
  handleButtonClick(value: string) {
    // Get the modal
    let modal: HTMLElement = this.getModalElement(value);
    let flipCard: HTMLElement = this.getFlipCardElement(value);

    modal.style.display = 'flex';
    if (!flipCard.classList.contains('hovered')) {
      flipCard.classList.toggle('hovered');
    }
  }

  // When the user clicks on <span> (x), close the modal
  handleSpanClose(value: string) {
    // Get the modal
    let modal: HTMLElement = this.getModalElement(value);
    let flipCard: HTMLElement = this.getFlipCardElement(value);

    modal.style.display = 'none';
    if (flipCard.classList.contains('hovered')) {
      flipCard.classList.toggle('hovered');
    }
  }

  // When the user clicks anywhere outside of the modal, close it
  handleModalClose(value: string, event: MouseEvent) {
    // Get the modal
    let modal: HTMLElement = this.getModalElement(value);
    let flipCard: HTMLElement = this.getFlipCardElement(value);

    if (event.target == modal) {
      modal.style.display = 'none';
    }
    if (flipCard.classList.contains('hovered')) {
      flipCard.classList.toggle('hovered');
    }
  }

  getModalElement(value: string) {
    return document.getElementById('flipModal' + value) as HTMLElement;
  }

  getFlipCardElement(value: string) {
    return document.getElementById('flipCard' + value) as HTMLElement;
  }

  constructor() {}

  ngOnInit(): void {}
}
