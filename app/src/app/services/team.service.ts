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

  // get all teams
  getTeams(): Observable<Team[]> {
    const url = `${environment.apiUrl}/team/all`;
    return this.httpClient.get<Team[]>(url);
  }

  // get a team by name
  getTeam(name: string): Observable<Team[]> {
    const url = `${environment.apiUrl}/team?name=${name}`;
    return this.httpClient.get<Team[]>(url);
  }

  // get a team by id
  getTeamId(id: string): Observable<Team> {
    const url = `${environment.apiUrl}/team/${id}`;
    return this.httpClient.get<Team>(url);
  }
}
