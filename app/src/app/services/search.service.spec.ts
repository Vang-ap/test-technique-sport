import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { leaguesMock } from 'src/mocks/league.mock';
import { LeagueServiceMock } from 'src/mocks/league.service.mock';
import { LeagueService } from './league.service';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;
  let leagueServiceMock = new LeagueServiceMock();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SearchService,
        {
          provide: LeagueService,
          useValue: leagueServiceMock
        }
      ]
    });
    service = TestBed.inject(SearchService);
  });

  it('should be created and call api at construct', () => {
    expect(service).toBeTruthy();
    expect(service.leagues).toEqual(leaguesMock);
  });

  it('should return nothing if value is empty', () => {
    service.searchResponse$.subscribe(response => {
      expect(response).toEqual([]);
    });

    service.search('');
  });

  it('should return nothing if the value is not contained in a league name', () => {
    service.searchResponse$.subscribe(response => {
      expect(response).toEqual([]);
    });

    service.search('ars');
  });

  it('should return leagues if the value is contained in a league name', () => {
    service.searchResponse$.subscribe(response => {
      expect(response).toEqual(leaguesMock);
    });

    service.search('Pre');
  });
});
