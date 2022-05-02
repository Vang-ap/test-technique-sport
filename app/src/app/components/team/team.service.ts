import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/models/team';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getTeams(): Observable<Team[]> {
    const url = `${environment.apiUrl}/team/all`;
    return this.httpClient.get<Team[]>(url);
  }

  getTeam(name: string): Observable<Team[]> {
    const url = `${environment.apiUrl}/team?name=${name}`;
    return this.httpClient.get<Team[]>(url);
  }
}
