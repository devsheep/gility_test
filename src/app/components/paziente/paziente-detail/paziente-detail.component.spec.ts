import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PazienteDetailComponent } from './paziente-detail.component';

describe('PazienteDetailComponent', () => {
  let component: PazienteDetailComponent;
  let fixture: ComponentFixture<PazienteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PazienteDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PazienteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
