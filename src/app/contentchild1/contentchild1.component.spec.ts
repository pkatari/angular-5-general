import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentchild1Component } from './contentchild1.component';

describe('Contentchild1Component', () => {
  let component: Contentchild1Component;
  let fixture: ComponentFixture<Contentchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contentchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contentchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
