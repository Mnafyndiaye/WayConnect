import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrerCourseComponent } from './enregistrer-course.component';

describe('EnregistrerCourseComponent', () => {
  let component: EnregistrerCourseComponent;
  let fixture: ComponentFixture<EnregistrerCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnregistrerCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnregistrerCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
