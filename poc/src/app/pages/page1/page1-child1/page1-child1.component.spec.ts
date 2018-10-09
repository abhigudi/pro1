import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Child1Component } from './page1-child1.component';

describe('Page1Child1Component', () => {
  let component: Page1Child1Component;
  let fixture: ComponentFixture<Page1Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
