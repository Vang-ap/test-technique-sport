import { Component, OnInit } from '@angular/core';
import { League } from 'src/app/models/league';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  leagues!: League[];
  query = '';

  constructor(
    private leagueService: LeagueService
  ) { }

  ngOnInit(): void { }

  // display leagues
  displayLeagues() {
    this.leagueService.getLeagues().subscribe((response: League[]) => {
      this.leagues = response
    })
  }
}
