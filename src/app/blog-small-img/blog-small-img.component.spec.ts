import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSmallImgComponent } from './blog-small-img.component';

describe('BlogSmallImgComponent', () => {
  let component: BlogSmallImgComponent;
  let fixture: ComponentFixture<BlogSmallImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSmallImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSmallImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
