import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMediumImgComponent } from './blog-medium-img.component';

describe('BlogMediumImgComponent', () => {
  let component: BlogMediumImgComponent;
  let fixture: ComponentFixture<BlogMediumImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogMediumImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMediumImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
