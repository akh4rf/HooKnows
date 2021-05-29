import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainButtonComponent } from './main-button/main-button.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HostGameComponent } from './host-game/host-game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { GameListItemComponent } from './game-list-item/game-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainButtonComponent,
    MainMenuComponent,
    HostGameComponent,
    JoinGameComponent,
    GameListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
