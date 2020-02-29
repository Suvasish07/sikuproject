import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWithSidebarComponent } from './portfolio-with-sidebar.component';

describe('PortfolioWithSidebarComponent', () => {
  let component: PortfolioWithSidebarComponent;
  let fixture: ComponentFixture<PortfolioWithSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioWithSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
