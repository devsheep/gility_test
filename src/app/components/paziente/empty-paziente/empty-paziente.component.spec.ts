import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPazienteComponent } from './empty-paziente.component';

describe('EmptyPazienteComponent', () => {
  let component: EmptyPazienteComponent;
  let fixture: ComponentFixture<EmptyPazienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyPazienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyPazienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
