import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewchild1Component } from './viewchild1.component';

describe('Viewchild1Component', () => {
  let component: Viewchild1Component;
  let fixture: ComponentFixture<Viewchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
