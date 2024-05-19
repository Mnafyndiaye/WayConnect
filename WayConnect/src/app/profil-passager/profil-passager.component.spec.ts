import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPassagerComponent } from './profil-passager.component';

describe('ProfilPassagerComponent', () => {
  let component: ProfilPassagerComponent;
  let fixture: ComponentFixture<ProfilPassagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilPassagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilPassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
