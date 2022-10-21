import { PlayerFormComponent } from './containers/player-form/player-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayersComponent } from './containers/players/players.component';
import { PlayerModalComponent } from './containers/player-modal/player-modal.component';

const routes: Routes = [
  {path: '', component: PlayersComponent},
  {path: 'new', component: PlayerFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
