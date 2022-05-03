import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { League } from 'src/app/models/league';
import { LeagueService } from 'src/app/services/league.service';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let leagueService: LeagueService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      providers: [LeagueService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    leagueService = TestBed.inject(LeagueService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display leagues', () => {
    const response: League[] = [];

    const spy = spyOn(leagueService, 'getLeagues').and.callFake(() => {
      return of(response)
    });

    component.displayLeagues();

    expect(spy).toHaveBeenCalled();
  });

});
