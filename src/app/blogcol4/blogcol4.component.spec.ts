import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogcol4Component } from './blogcol4.component';

describe('Blogcol4Component', () => {
  let component: Blogcol4Component;
  let fixture: ComponentFixture<Blogcol4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blogcol4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blogcol4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
