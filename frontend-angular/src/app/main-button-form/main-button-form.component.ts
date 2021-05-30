import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'main-button-form',
  templateUrl: './main-button-form.component.html',
  styleUrls: ['./main-button-form.component.css']
})
export class MainButtonFormComponent implements OnInit {

  @Input() height!: string;
  @Input() width!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
