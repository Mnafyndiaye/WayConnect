import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacterConducteurComponent } from './contacter-conducteur.component';

describe('ContacterConducteurComponent', () => {
  let component: ContacterConducteurComponent;
  let fixture: ComponentFixture<ContacterConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacterConducteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacterConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
