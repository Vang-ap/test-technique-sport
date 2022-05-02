import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit {
  @Input() teamId!: string;

  team!: Team;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.teamService.getTeamId(this.teamId).subscribe((response: Team) => {
      console.log('response team:', response);

      this.team = response;
    })
  }

}
