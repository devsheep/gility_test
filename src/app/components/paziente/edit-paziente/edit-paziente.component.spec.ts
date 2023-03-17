import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPazienteComponent } from './edit-paziente.component';

describe('EditPazienteComponent', () => {
  let component: EditPazienteComponent;
  let fixture: ComponentFixture<EditPazienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPazienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPazienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
