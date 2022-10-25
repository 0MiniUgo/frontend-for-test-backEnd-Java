import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayerFormComponent } from './containers/player-form/player-form.component';
import { PlayerModalRemoveComponent } from './containers/player-modal-remove/player-modal-remove.component';
import { PlayerModalComponent } from './containers/player-modal/player-modal.component';
import { PlayersComponent } from './containers/players/players.component';
import { PlayersRoutingModule } from './players-routing.module';


@NgModule({
  declarations: [
    PlayersComponent,
    PlayerFormComponent,
    PlayersListComponent,
    PlayerModalComponent,
    PlayerModalRemoveComponent
    ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    AppMaterialModule, // Modulo compartilhado
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule
  ],
  entryComponents: [
    PlayerModalComponent
  ]
})
export class PlayersModule { }
