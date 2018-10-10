import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Child2Subchild1Component } from './page1-child2-subchild1.component';

describe('Page1Child2Subchild1Component', () => {
  let component: Page1Child2Subchild1Component;
  let fixture: ComponentFixture<Page1Child2Subchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1Child2Subchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Child2Subchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
