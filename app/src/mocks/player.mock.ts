import { Player } from 'src/app/models/player';

export const playerMock = {
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
} as Player;

export const playersMock = [playerMock] as Player[];
