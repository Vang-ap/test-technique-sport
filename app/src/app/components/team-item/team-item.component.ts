import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit, OnDestroy {
  @Input() teamId!: string;

  team!: Team;
  subscription$!: Subscription;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.subscription$ = this.teamService.getTeamId(this.teamId).subscribe((response: Team) => {
      this.team = response;
    })
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
