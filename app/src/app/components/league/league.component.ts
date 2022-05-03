import { Component, OnInit } from '@angular/core';
import { League } from 'src/app/models/league';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  leagues!: League[];

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.searchResponse$.subscribe((response: League[]) => {
      this.leagues = response;
    })
  }
}
