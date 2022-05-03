import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerItemComponent } from './player-item.component';

describe('PlayerItemComponent', () => {
  let component: PlayerItemComponent;
  let fixture: ComponentFixture<PlayerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerItemComponent);
    component = fixture.componentInstance;
    component.player = {
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
    };
    fixture.detectChanges();

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.dateBorn).toBeDefined();
  });
});
