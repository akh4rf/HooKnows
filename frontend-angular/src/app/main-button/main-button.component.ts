import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent implements OnInit {

  @Input() iconClasses!: string;
  @Input() dest!: string;
  @Input() height!: string;
  @Input() width!: string;
  constructor() { }

  ngOnInit(): void {
  }

}