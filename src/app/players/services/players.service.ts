import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Player } from '../model/player';
import { first, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private readonly API = 'api/jogadores';

  constructor(
    private httpClient: HttpClient
  ) { }

  findAll(){

    return this.httpClient.get<Player[]>(this.API)
    .pipe(
      first(),
      //delay(5000)
    );
  }

  save(record: Partial<Player>){

    return this.httpClient.post<Player>(this.API, record)
    .pipe(
      first()
    );
  }

  replace(record: Partial<Player>){

    return this.httpClient.put<Player>(`${this.API}/${record.id}`, record)
    .pipe(
      first()
    );
  }
}
