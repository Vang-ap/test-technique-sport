import { Component, Input, OnInit } from '@angular/core';
import { League } from 'src/app/models/league';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  model: any;

  leagues!: League[];
  query = '';
  values = '';


  constructor(
    private leagueService: LeagueService
  ) { }

  ngOnInit(): void { }

  // inisiatilation items
  inittalizeItem() {
    this.leagueService.getLeagues().subscribe((response: League[]) => {
      this.leagues = response
    })
    // this.items = this.leagues;
  }

  // detect change input value
  onChange(event: any) {
    const value = event.target.value;
    this.inittalizeItem();
    console.log('Value input :', event.target.value);

    if (value && value.trim() != '') {

    }
  }

  // detect key press
  onKey(event: any) {
    this.values += event.target.value + ' | ';
    console.log('values enter =>', this.values);
  }

  // search validation
  searchValide() {
    this.inittalizeItem();
    console.log('VALIDER');
    this.query = '';

  }

  // search delete
  deleteValue() {
    console.log('DELETE');
    this.values = '';
    this.model = null;
    this.leagues = [];


  }


}
