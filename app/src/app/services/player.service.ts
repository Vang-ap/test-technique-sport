import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/player';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  // get all players
  getPlayers(): Observable<Player[]> {
    const url = `${environment.apiUrl}/player/all`;
    return this.httpClient.get<Player[]>(url);
  }

  // get a player by name
  getPlayer(name: string): Observable<Player[]> {
    const url = `${environment.apiUrl}/player?name=${name}`;
    return this.httpClient.get<Player[]>(url);
  }

  // get a player by id
  getPlayerId(id: string): Observable<Player> {
    const url = `${environment.apiUrl}/player/${id}`;
    return this.httpClient.get<Player>(url);
  }
}
