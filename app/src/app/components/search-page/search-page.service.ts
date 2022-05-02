import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { League } from '../../models/league';

@Injectable({
  providedIn: 'root'
})
export class SearchPageService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getLeagues(): Observable<League[]> {
    const url = `${environment.apiUrl}/league/all`;
    return this.httpClient.get<League[]>(url);
  }

  getLeague(name: string): Observable<League[]> {
    const url = `${environment.apiUrl}/league?name=${name}`;
    return this.httpClient.get<League[]>(url);
  }
}
