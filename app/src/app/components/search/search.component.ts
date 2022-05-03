import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  model = '';

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void { }

  // detect key press
  onKey() {
    this.searchService.search(this.model)
  }

  // delete search
  deleteValue() {
    this.model = '';
    this.onKey();
  }
}