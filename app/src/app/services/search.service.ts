
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { League } from '../models/league';
import { LeagueService } from './league.service';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResponse$ = new Subject<League[]>();
  leagues!: League[];

  constructor(
    private leagueService: LeagueService
  ) {
    this.leagueService.getLeagues().subscribe((response: League[]) => {
      this.leagues = response;
    })
  }

  search(value: string) {
    if (value === '') {
      this.searchResponse$.next([]);
      return;
    }

    const results = this.leagues.filter(league => league.name.toLowerCase().includes(value.toLowerCase()));

    this.searchResponse$.next(results);
  }
}
