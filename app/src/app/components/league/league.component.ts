import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { League } from 'src/app/models/league';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit, OnDestroy {
  leagues!: League[];
  subscription$!: Subscription;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.subscription$ = this.searchService.searchResponse$.subscribe((response: League[]) => {
      this.leagues = response;
    })
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
