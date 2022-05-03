import { Component, Input, OnInit } from '@angular/core';
import { League } from 'src/app/models/league';

@Component({
  selector: 'app-league-item',
  templateUrl: './league-item.component.html',
  styleUrls: ['./league-item.component.scss']
})
export class LeagueItemComponent implements OnInit {
  @Input() league!: League;

  constructor() { }

  ngOnInit(): void { }
}
