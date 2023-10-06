import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corpo03Component } from './corpo03.component';

describe('Corpo03Component', () => {
  let component: Corpo03Component;
  let fixture: ComponentFixture<Corpo03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Corpo03Component]
    });
    fixture = TestBed.createComponent(Corpo03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
