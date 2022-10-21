import { Component, Inject, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from '../../model/player';

@Component({
  selector: 'app-player-modal-remove',
  templateUrl: './player-modal-remove.component.html',
  styleUrls: ['./player-modal-remove.component.scss']
})
export class PlayerModalRemoveComponent implements OnInit {

  constructor(
    private service: PlayersService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<PlayerModalRemoveComponent>,
    @Inject (MAT_DIALOG_DATA) public player: Player
  ) { }

  ngOnInit(): void {
  }

  onYes(){
    this.service.remove(this.player.id).subscribe({
      next: () => {
        this.snackBar.open('Jogador removido com sucesso', 'Recarregar', {duration: 5000})
        .onAction()
        .subscribe(() => window.location.reload());
      },
      error: () => {
        this.snackBar.open('Erro ao tentar remover jogador');
      }
    });
    this.dialogRef.close();
  }

  onCancel(){
    this.dialogRef.close();
  }

}
