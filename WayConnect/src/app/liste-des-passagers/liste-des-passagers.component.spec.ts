import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesPassagersComponent } from './liste-des-passagers.component';

describe('ListeDesPassagersComponent', () => {
  let component: ListeDesPassagersComponent;
  let fixture: ComponentFixture<ListeDesPassagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesPassagersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesPassagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
