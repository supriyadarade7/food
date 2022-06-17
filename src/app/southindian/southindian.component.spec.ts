import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthindianComponent } from './southindian.component';

describe('SouthindianComponent', () => {
  let component: SouthindianComponent;
  let fixture: ComponentFixture<SouthindianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthindianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthindianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
