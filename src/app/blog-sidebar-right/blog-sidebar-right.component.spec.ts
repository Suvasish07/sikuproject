import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSidebarRightComponent } from './blog-sidebar-right.component';

describe('BlogSidebarRightComponent', () => {
  let component: BlogSidebarRightComponent;
  let fixture: ComponentFixture<BlogSidebarRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSidebarRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSidebarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
