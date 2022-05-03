import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { leagueMock, leaguesMock } from 'src/mocks/league.mock';
import { LeagueService } from './league.service';

describe('LeagueService', () => {
  let service: LeagueService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LeagueService]
    });
    service = TestBed.inject(LeagueService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all leagues', () => {
    const mockResponse = leaguesMock

    service.getLeagues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = http.expectOne(`${environment.apiUrl}/league/all`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get one league by id', () => {
    const id = leagueMock._id as string;
    const mockResponse = leagueMock;

    service.getLeagueId(id).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = http.expectOne(`${environment.apiUrl}/league/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
