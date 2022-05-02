import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { League } from 'src/app/models/league';
import { Team } from 'src/app/models/team';
import { LeagueService } from 'src/app/services/league.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  query = '';
  league !: League;

  constructor(
    private teamService: TeamService,
    private leagueService: LeagueService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.leagueService.getLeagueId(params.leagueId).subscribe((response: League) => {
        console.log('response:', response);

        this.league = response;
      })
    })

  }

}
