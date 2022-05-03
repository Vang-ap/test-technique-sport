import { of } from 'rxjs';
import { leaguesMock } from './league.mock';

export class LeagueServiceMock {
  getLeagues() {
    return of(leaguesMock);
  }
}
