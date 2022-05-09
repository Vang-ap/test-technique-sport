import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  model = '';

  constructor(
    private searchService: SearchService
  ) { }

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
