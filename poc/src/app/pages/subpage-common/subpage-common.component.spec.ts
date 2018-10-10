import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageCommonComponent } from './subpage-common.component';

describe('SubpageCommonComponent', () => {
  let component: SubpageCommonComponent;
  let fixture: ComponentFixture<SubpageCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
