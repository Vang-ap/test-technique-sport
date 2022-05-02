import { Component, OnInit } from '@angular/core';
import { SearchPageService } from 'src/app/services/search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  model = '';

  constructor(
    private searchPageService: SearchPageService
  ) { }

  ngOnInit(): void { }

  // detect key press
  onKey() {
    this.searchPageService.search(this.model)
  }

  // search delete
  deleteValue() {
    this.model = '';
    this.onKey();
  }
}
