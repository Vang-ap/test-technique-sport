import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/models/player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {
  players!: Player[];
  subscription$!: Subscription;

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.subscription$ = this.playerService.getPlayers().subscribe((response: Player[]) => {
      this.players = response;
    })
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  goBack() {
    history.back();
  }
}
