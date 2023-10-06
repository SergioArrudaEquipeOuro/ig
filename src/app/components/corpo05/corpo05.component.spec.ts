import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corpo05Component } from './corpo05.component';

describe('Corpo05Component', () => {
  let component: Corpo05Component;
  let fixture: ComponentFixture<Corpo05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Corpo05Component]
    });
    fixture = TestBed.createComponent(Corpo05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
