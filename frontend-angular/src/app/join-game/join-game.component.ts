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

  sortParams: Record<string,string> = {
    "host" : "none",
    "code" : "none",
    "players" : "none"
  };
  sortGames(sort:string){
    if(this.sortParams[sort] == "none" || this.sortParams[sort] == "ascending"){
      this.games.sort((game1: Game, game2: Game) => {
        return game1[sort] < game2[sort] ? 1 : -1;
      });
        for (let key in this.sortParams) {
          this.sortParams[key] = "none";
        }
      this.sortParams[sort] = "descending";
    }
    else{
      this.games.sort((game1: Game, game2: Game) => {
        return game1[sort] > game2[sort] ? 1 : -1;
      });
      this.sortParams[sort] = "ascending";
    }

  }

  games: Game[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getGamesFromDB();
  }
}


interface Game {
  host: string;
  code: string;
  players: string;
  [key : string]: string;
}
