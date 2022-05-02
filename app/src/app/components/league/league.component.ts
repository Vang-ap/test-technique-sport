import { Component, OnInit } from '@angular/core';
import { League } from 'src/app/models/league';
import { SearchPageService } from 'src/app/services/search-page.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  leagues!: League[];

  constructor(
    private searchPageService: SearchPageService
  ) { }

  ngOnInit(): void {
    this.searchPageService.searchResponse$.subscribe((response: League[]) => {
      this.leagues = response;
    })
  }

}
