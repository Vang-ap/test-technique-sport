import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

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
    const response = [
      {
        "signin": {
          "amount": 63750000,
          "currency": "eur"
        },
        "players": [],
        "_id": "5d2d058cda07b95bb8f16f80",
        "name": "Pierre-Emerick Aubameyang",
        "position": "Forward",
        "thumbnail": "https://www.thesportsdb.com/images/media/player/thumb/fnk3u51520755737.jpg",
        "born": "1989-06-19T01:37:19.198Z"
      }
    ]
    service.getPlayers();

    const req = http.expectOne(`${environment.apiUrl}/player/all`);
    expect(req.request.method).toBe('GET');
    req.flush(response);

  });
});
