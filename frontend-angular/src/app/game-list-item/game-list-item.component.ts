import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.css']
})
export class GameListItemComponent implements OnInit {

  @Input() username! : string;
  @Input() code! : string;
  @Input() players! : string;
  constructor() { }

  ngOnInit(): void {
  }

}
