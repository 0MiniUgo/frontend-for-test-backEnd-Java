import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  form = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.minLength(11), Validators.maxLength(11)]],
    grupo: ['0', [Validators.required]]
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: PlayersService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe({
      next: () => {
        this.onSuccess();
        this.route.navigate(['']);
      },
      error: () => {
        this.onError();
      }
    });
  }

  onList(){
    this.route.navigate(['']);
  }

  private onSuccess(){
    this.snackBar.open('Jogador cadastrado.', 'Ok', {duration: 5000});
  }

  private onError(){
    this.snackBar.open('Falha ao cadastrar jogador.', 'Ok', {duration: 5000});
  }
}
