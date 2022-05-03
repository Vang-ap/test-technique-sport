import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamService } from 'src/app/services/team.service';

import { TeamItemComponent } from './team-item.component';

describe('TeamItemComponent', () => {
  let component: TeamItemComponent;
  let fixture: ComponentFixture<TeamItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamItemComponent],
      providers: [TeamService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
