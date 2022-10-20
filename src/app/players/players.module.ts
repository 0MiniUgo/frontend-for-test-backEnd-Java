import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players/players.component';
import { PlayerFormComponent } from './player-form/player-form.component';


@NgModule({
  declarations: [
    PlayersComponent,
    PlayerFormComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    AppMaterialModule, // Modulo compartilhado
    SharedModule
  ]
})
export class PlayersModule { }
