import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceIdentiteComponent } from './piece-identite.component';

describe('PieceIdentiteComponent', () => {
  let component: PieceIdentiteComponent;
  let fixture: ComponentFixture<PieceIdentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieceIdentiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieceIdentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
