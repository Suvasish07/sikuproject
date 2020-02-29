import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogcol2Component } from './blogcol2.component';

describe('Blogcol2Component', () => {
  let component: Blogcol2Component;
  let fixture: ComponentFixture<Blogcol2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blogcol2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blogcol2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
