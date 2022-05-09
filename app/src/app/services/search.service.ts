
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { League } from '../models/league';
import { LeagueService } from './league.service';


@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnDestroy {
  searchResponse$ = new Subject<League[]>();
  leagues!: League[];
  subscription$!: Subscription;

  constructor(
    private leagueService: LeagueService
  ) {
    this.subscription$ = this.leagueService.getLeagues().subscribe((response: League[]) => {
      this.leagues = response;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
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
