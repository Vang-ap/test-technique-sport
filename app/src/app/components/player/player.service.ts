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

  getPlayers(): Observable<Player[]> {
    const url = `${environment.apiUrl}/player/all`;
    return this.httpClient.get<Player[]>(url);
  }

  getPlayer(name: string): Observable<Player[]> {
    const url = `${environment.apiUrl}/player?name=${name}`;
    return this.httpClient.get<Player[]>(url);
  }
}
