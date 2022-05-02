import { Component, OnInit } from '@angular/core';
import { League } from 'src/app/models/league';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  model: any;
  leagues!: League[];
  query = '';

  constructor(
    private leagueService: LeagueService
  ) { }

  ngOnInit(): void {
    this.leagueService.getLeagues().subscribe((response: League[]) => {
      this.leagues = response
    })

  }

}
