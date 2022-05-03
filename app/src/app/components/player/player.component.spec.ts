import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerService } from 'src/app/services/player.service';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerComponent],
      providers: [PlayerService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.players).toBeUndefined();
  });
});
