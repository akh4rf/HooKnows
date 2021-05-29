import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostGameComponent } from './host-game/host-game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'host-game', component: HostGameComponent },
  { path: 'join-game', component: JoinGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
