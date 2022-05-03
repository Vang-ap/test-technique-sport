import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchService } from 'src/app/services/search.service';
import { SearchComponent } from './search.component';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: SearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [SearchService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    searchService = TestBed.inject(SearchService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.model).toBeDefined();
  });

  it('should detect key press', () => {
    const spy = spyOn(searchService, 'search').and.stub();

    component.onKey();

    expect(spy).toHaveBeenCalled();
  });

  it('should delete value', () => {
    component.model = '';
    spyOn(component, 'onKey').and.stub();

    component.deleteValue();

    expect(component.onKey).toHaveBeenCalled();
  });
});
