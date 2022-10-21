import { Component, Inject, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from '../../model/player';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.scss']
})
export class PlayerModalComponent implements OnInit {

  form = this.formBuilder.group({
    id: [this.data.id], // apenas para identificação, não aparece no front
    nome: [this.data.nome],
    email: [this.data.email],
    telefone: [this.data.telefone]
  });

  constructor(
    private service: PlayersService,
    private snackBar: MatSnackBar,
    private formBuilder: NonNullableFormBuilder,
    private dialogRef: MatDialogRef<PlayerModalComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Player
  ) { }

  ngOnInit(): void {
  }

  onEdit(){
    this.service.replace(this.form.value)
    .subscribe({
      next: () => {
        this.onSuccess();
      },
      error: () => {
        this.onError();
      }
    });

    this.dialogRef.close();
  }

  onCancel(){
    this.dialogRef.close();
  }

  private onSuccess(){
    this.snackBar.open('Jogador atualizado.', 'Regarregar', {duration: 5000})
      .onAction()
      .subscribe(() => window.location.reload());
  }

  private onError(){
    this.snackBar.open('Falha ao atualiza jogador.', 'Ok', {duration: 5000});
  }

}
