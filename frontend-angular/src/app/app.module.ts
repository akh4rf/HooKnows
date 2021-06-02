import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainButtonComponent } from './main-button/main-button.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HostGameComponent } from './host-game/host-game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { GameListItemComponent } from './game-list-item/game-list-item.component';
import { SubmitCategoryComponent } from './submit-category/submit-category.component';
import { MainButtonFormComponent } from './main-button-form/main-button-form.component';
import { FlipCardModalComponent } from './flip-card-modal/flip-card-modal.component';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainButtonComponent,
    MainMenuComponent,
    HostGameComponent,
    JoinGameComponent,
    GameListItemComponent,
    SubmitCategoryComponent,
    MainButtonFormComponent,
    FlipCardModalComponent,
    AutofocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
