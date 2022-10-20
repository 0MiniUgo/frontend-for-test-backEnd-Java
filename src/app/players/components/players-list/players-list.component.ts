import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Player } from '../../model/player';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  @Input() players: Player[] = [];
  @Output() add = new EventEmitter(false)

  readonly displayedColumns: string[] = ['nome', 'email', 'telefone', 'grupo', 'codinome', 'actions'];


  constructor(
  ) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true)
  }

}
