import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css'],
})
export class JoinGameComponent implements OnInit {
  hostSort:string = "none";
  codeSort:string = "none";
  playerSort:string = "none";
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
    console.log(this.games);
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
    if(this.playerSort == "none" || this.playerSort == "ascending"){
      this.games.sort((game1: Game, game2: Game) => {
        return game1.players < game2.players ? 1 : -1;
      });
      this.playerSort = "descending";
      this.codeSort = "none";
      this.hostSort = "none";
    }
    else{
      this.games.sort((game1: Game, game2: Game) => {
        return game1.players > game2.players ? 1 : -1;
      });
      this.playerSort = "ascending";
    }
  }

  sortByCode() {
    if(this.codeSort == "none" || this.codeSort == "ascending"){
      this.games.sort((game1: Game, game2: Game) => {
        return game1.code < game2.code ? 1 : -1;
      });
      this.playerSort = "none";
      this.codeSort = "descending";
      this.hostSort = "none";
    }
    else{
      this.games.sort((game1: Game, game2: Game) => {
        return game1.players > game2.players ? 1 : -1;
      });
      this.codeSort = "ascending";
    }
  }

  sortByHost() {
    if(this.hostSort == "none" || this.hostSort == "ascending"){
      this.games.sort((game1: Game, game2: Game) => {
        return game1.username < game2.username ? 1 : -1;
      });
      this.playerSort = "none";
      this.codeSort = "none";
      this.hostSort = "descending";
    }
    else{
      this.games.sort((game1: Game, game2: Game) => {
        return game1.players > game2.players ? 1 : -1;
      });
      this.hostSort = "ascending";
    }
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
