import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Paziente } from 'src/app/model/paziente.model';
import { PazienteService } from 'src/app/services/paziente.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-paziente-detail',
  templateUrl: './paziente-detail.component.html',
  styleUrls: ['./paziente-detail.component.css']
})
export class PazienteDetailComponent {
  paziente: Paziente;
  codiceFiscale: string;
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private pazienteService: PazienteService, private route: ActivatedRoute, private router: Router, private modalService: MdbModalService) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
    this.codiceFiscale = params['id'];
    this.paziente = this.pazienteService.getPaziente(this.codiceFiscale);
    });
  }

  isEmptyObject() {
    return (this.paziente && (Object.keys(this.paziente).length === 0));
  }

  editPaziente() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  deletePaziente() {
    this.pazienteService.deletePaziente(this.codiceFiscale);
    this.router.navigate(['/pazienti']);
  }

  prenotaVisita() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: { codiceFiscale: this.codiceFiscale }
    });
  }
}
