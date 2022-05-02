import { Pipe, PipeTransform } from '@angular/core';
import { League } from '../models/league';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(leagues: League[], query: string): League[] {
    if (!query) {
      return leagues;
    }

    return leagues.filter(league => {
      return league.name.toUpperCase().includes(query.toUpperCase());
    });
  }

}
