import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMaonryComponent } from './portfolio-maonry.component';

describe('PortfolioMaonryComponent', () => {
  let component: PortfolioMaonryComponent;
  let fixture: ComponentFixture<PortfolioMaonryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMaonryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMaonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
