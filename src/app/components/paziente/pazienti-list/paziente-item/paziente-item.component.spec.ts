import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PazienteItemComponent } from './paziente-item.component';

describe('PazienteItemComponent', () => {
  let component: PazienteItemComponent;
  let fixture: ComponentFixture<PazienteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PazienteItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PazienteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
