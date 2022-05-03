import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueItemComponent } from './league-item.component';

describe('LeagueItemComponent', () => {
  let component: LeagueItemComponent;
  let fixture: ComponentFixture<LeagueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueItemComponent);
    component = fixture.componentInstance;
    component.league = {
      "_id": "5d2cdcf7da07b95bb8f16ed1",
      "name": "English Premier League",
      "sport": "soccer",
      "teams": []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
