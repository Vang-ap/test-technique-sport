import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teams!: Team[];
  query = '';

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((response: Team[]) => {
      this.teams = response
    })

    console.log('data team:', this.teams);

  }

}
