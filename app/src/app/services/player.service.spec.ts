import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { playersMock } from 'src/mocks/player.mock';
import { Player } from '../models/player';

import { PlayerService } from './player.service';

describe('PlayerService', () => {
  let service: PlayerService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayerService]
    });
    service = TestBed.inject(PlayerService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all players', () => {
    const mockResponse = playersMock;

    service.getPlayers().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = http.expectOne(`${environment.apiUrl}/player/all`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
