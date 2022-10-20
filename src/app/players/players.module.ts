import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players/players.component';


@NgModule({
  declarations: [
    PlayersComponent,
    PlayerFormComponent
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
