import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { VisiteService } from 'src/app/services/visite.service';
import { DatePipe } from '@angular/common'
import { Visita } from 'src/app/model/visita.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  codiceFiscale: string;
  descrizione: string;
  data: Date;

  constructor(public modalRef: MdbModalRef<ModalComponent>, private visitaService: VisiteService, public datepipe: DatePipe) {}

  close(): void {
    const closeMessage = 'Modale chiusa';
    this.modalRef.close(closeMessage)
  }

  salva(): void {
    const closeMessage = 'Visita salvata';
    let descrizione = this.descrizione;
    let dataVisita = this.data;
    let codiceFiscale = this.codiceFiscale;
    let esito = "Pending..";
    let lastVisitaId = this.visitaService.getLastVisitaId();
    let currentId = lastVisitaId + 1;

    const visita: Visita = {'numeroVisita': currentId, 'descrizione': descrizione, 'dataSvolgimento': dataVisita, 'codiceFiscale': codiceFiscale, 'esito': esito};
    this.visitaService.addVisita(visita);

    this.modalRef.close(closeMessage)
  }
}