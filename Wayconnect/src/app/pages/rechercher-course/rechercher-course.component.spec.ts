import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherCourseComponent } from './rechercher-course.component';

describe('RechercherCourseComponent', () => {
  let component: RechercherCourseComponent;
  let fixture: ComponentFixture<RechercherCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
