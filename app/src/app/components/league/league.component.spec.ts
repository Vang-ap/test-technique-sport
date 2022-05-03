import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchService } from 'src/app/services/search.service';
import { LeagueComponent } from './league.component';

describe('LeagueComponent', () => {
  let component: LeagueComponent;
  let fixture: ComponentFixture<LeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueComponent],
      providers: [SearchService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueComponent);
    component = fixture.componentInstance;
    component.leagues = [{
      "_id": "5d2cdcf7da07b95bb8f16ed1",
      "name": "English Premier League",
      "sport": "soccer",
      "teams": []
    }];
    fixture.detectChanges();

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
