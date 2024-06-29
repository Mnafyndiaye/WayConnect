import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacterPassagerComponent } from './contacter-passager.component';

describe('ContacterPassagerComponent', () => {
  let component: ContacterPassagerComponent;
  let fixture: ComponentFixture<ContacterPassagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacterPassagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacterPassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
