import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corpo04Component } from './corpo04.component';

describe('Corpo04Component', () => {
  let component: Corpo04Component;
  let fixture: ComponentFixture<Corpo04Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Corpo04Component]
    });
    fixture = TestBed.createComponent(Corpo04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
