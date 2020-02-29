import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogcol3Component } from './blogcol3.component';

describe('Blogcol3Component', () => {
  let component: Blogcol3Component;
  let fixture: ComponentFixture<Blogcol3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blogcol3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blogcol3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
