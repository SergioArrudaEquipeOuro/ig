import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corpo01Component } from './corpo01.component';

describe('Corpo01Component', () => {
  let component: Corpo01Component;
  let fixture: ComponentFixture<Corpo01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Corpo01Component]
    });
    fixture = TestBed.createComponent(Corpo01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
