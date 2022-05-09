import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { League } from 'src/app/models/league';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  league !: League;
  subscription1$!: Subscription;
  subscription2$!: Subscription;

  constructor(
    private leagueService: LeagueService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscription1$ = this.route.params.subscribe((params: any) => {
      this.subscription2$ = this.leagueService.getLeagueId(params.leagueId).subscribe((response: League) => {
        this.league = response;
      })
    })
  }

  ngOnDestroy(): void {
    if (this.subscription1$ && this.subscription2$) {
      this.subscription1$.unsubscribe();
      this.subscription2$.unsubscribe();
    }
  }

  goBack() {
    history.back();
  }
}
