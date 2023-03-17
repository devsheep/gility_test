import { Component, Input } from '@angular/core';
import { Paziente } from 'src/app/model/paziente.model';

@Component({
  selector: 'app-paziente-item',
  templateUrl: './paziente-item.component.html',
  styleUrls: ['./paziente-item.component.css']
})
export class PazienteItemComponent {
  @Input() paziente: Paziente;
  @Input() codiceFiscale: string;

  constructor() {}
}
