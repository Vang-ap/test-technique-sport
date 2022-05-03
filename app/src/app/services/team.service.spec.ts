import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { teamMock, teamsMock } from 'src/mocks/team.mock';
import { TeamService } from './team.service';

describe('TeamService', () => {
  let service: TeamService;
  let http: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamService]
    });
    service = TestBed.inject(TeamService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all teams', () => {
    const mockResponse = teamsMock;

    service.getTeams().subscribe(response => {
      expect(response).toEqual(mockResponse)
    });

    const req = http.expectOne(`${environment.apiUrl}/team/all`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get one team by id', () => {
    const id = teamMock._id as string;
    const mockResponse = teamMock;

    service.getTeamId(id).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = http.expectOne(`${environment.apiUrl}/team/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
