import { Component, OnInit } from '@angular/core';
import { League } from '../../models/league';
import { SearchPageService } from './search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  model: any;
  leagues!: League[];
  query = '';

  constructor(
    private searchPageService: SearchPageService
  ) { }

  ngOnInit(): void {
    this.searchPageService.getLeagues().subscribe((response: League[]) => {
      this.leagues = response
    })

  }

  onChange(event: any) {
    event.target.value;
    console.log('Value input :', event.target.value);
    console.log('model', this.model);
    console.log('leagues =>', this.leagues);

  }


}
