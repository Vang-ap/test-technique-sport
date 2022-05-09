import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent implements OnInit {
  @Input() player!: Player;

  dateBorn: any;

  ngOnInit(): void {
    this.dateBorn = this.player.born
  }
}
