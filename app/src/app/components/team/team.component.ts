import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { League } from 'src/app/models/league';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  query = '';
  league !: League;

  constructor(
    private leagueService: LeagueService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.leagueService.getLeagueId(params.leagueId).subscribe((response: League) => {
        this.league = response;
      })
    })
  }
}
