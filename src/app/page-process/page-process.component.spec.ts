import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProcessComponent } from './page-process.component';

describe('PageProcessComponent', () => {
  let component: PageProcessComponent;
  let fixture: ComponentFixture<PageProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
