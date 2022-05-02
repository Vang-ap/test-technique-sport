import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { League } from '../models/league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  // get all leagues
  getLeagues(): Observable<League[]> {
    const url = `${environment.apiUrl}/league/all`;
    return this.httpClient.get<League[]>(url);
  }

  // get a league by name
  getLeague(name: string): Observable<League[]> {
    const url = `${environment.apiUrl}/league?name=${name}`;
    return this.httpClient.get<League[]>(url);
  }
}
