import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilConducteurComponent } from './profil-conducteur.component';

describe('ProfilConducteurComponent', () => {
  let component: ProfilConducteurComponent;
  let fixture: ComponentFixture<ProfilConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilConducteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
