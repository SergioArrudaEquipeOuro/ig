import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corpo02Component } from './corpo02.component';

describe('Corpo02Component', () => {
  let component: Corpo02Component;
  let fixture: ComponentFixture<Corpo02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Corpo02Component]
    });
    fixture = TestBed.createComponent(Corpo02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
