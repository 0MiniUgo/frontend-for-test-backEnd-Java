import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { PlayerFormComponent } from './containers/player-form/player-form.component';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './containers/players/players.component';
import { PlayersListComponent } from './components/players-list/players-list.component';


@NgModule({
  declarations: [
    PlayersComponent,
    PlayerFormComponent,
    PlayersListComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    AppMaterialModule, // Modulo compartilhado
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PlayersModule { }
