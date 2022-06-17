import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nonveg1Component } from './nonveg1.component';

describe('Nonveg1Component', () => {
  let component: Nonveg1Component;
  let fixture: ComponentFixture<Nonveg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nonveg1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nonveg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
