import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolioSingleComponent } from './page-portfolio-single.component';

describe('PagePortfolioSingleComponent', () => {
  let component: PagePortfolioSingleComponent;
  let fixture: ComponentFixture<PagePortfolioSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePortfolioSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePortfolioSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
