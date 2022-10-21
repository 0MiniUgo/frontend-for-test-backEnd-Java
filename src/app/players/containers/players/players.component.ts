import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Player } from '../../model/player';
import { PlayersService } from '../../services/players.service';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerModalComponent } from '../player-modal/player-modal.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players$: Observable<Player[]>;


  constructor(
    private service: PlayersService,
    private dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.players$ = this.service.findAll()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar jogadores.');
        return of([])
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

  onEdit(player: Player){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = player;

    this.dialog.open(PlayerModalComponent, dialogConfig);

  }

  ngOnInit(): void {
  }

}
