import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostGameComponent } from './host-game/host-game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SubmitCategoryComponent } from './submit-category/submit-category.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'host-game', component: HostGameComponent },
  { path: 'join-game', component: JoinGameComponent },
  { path: 'submit-category', component: SubmitCategoryComponent },
  { path: 'login-register', component: LoginRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
