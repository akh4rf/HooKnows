import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css'],
})
export class JoinGameComponent implements OnInit {
  handleCodeUpdated() {
    for (let item of this.getListItems()) {
      if (!this.getListItemCode(item).startsWith(this.getEnteredCode())) {
        if (!item.classList.contains('hidden')) {
          item.classList.toggle('hidden');
        }
      } else {
        if (item.classList.contains('hidden')) {
          item.classList.toggle('hidden');
        }
      }
    }
  }

  getListItemCode(element: HTMLElement) {
    return (element.firstChild!.firstChild!.childNodes[1] as HTMLElement)
      .innerHTML;
  }

  getEnteredCode() {
    let codeField: HTMLInputElement = document.getElementById(
      'codeField'
    ) as HTMLInputElement;
    return codeField.value.toUpperCase();
  }

  getListItems() {
    return Array.from(
      document.getElementsByClassName('list-item-wrapper')
    ) as HTMLElement[];
  }

  getGamesFromDB() {
    return this.httpClient.get('assets/data.json').subscribe((data) => {
      for (let game of data as any[]) {
        this.games.push(JSON.parse(JSON.stringify(game)));
      }
    });
  }

  sortByPlayers() {
    this.games.sort((game1: Game, game2: Game) => {
      return game1.players < game2.players ? 1 : -1;
    });
  }

  games: Game[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getGamesFromDB();
  }
}

interface Game {
  username: string;
  code: string;
  players: Number;
}
