import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererReservationComponent } from './gerer-reservation.component';

describe('GererReservationComponent', () => {
  let component: GererReservationComponent;
  let fixture: ComponentFixture<GererReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
