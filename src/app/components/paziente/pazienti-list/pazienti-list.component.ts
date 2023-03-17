import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paziente } from 'src/app/model/paziente.model';
import { PazienteService } from 'src/app/services/paziente.service';

@Component({
  selector: 'app-pazienti-list',
  templateUrl: './pazienti-list.component.html',
  styleUrls: ['./pazienti-list.component.css']
})

export class PazientiListComponent {
  pazienti: Paziente[] = [];

  constructor(private pazienteService: PazienteService, private router: Router, private route: ActivatedRoute) {
    this.pazienteService.pazientiChanged.subscribe(
      (pazienti: Paziente[]) => {
        this.pazienti = pazienti;
      }
    );
    this.pazienteService.getPazienti().subscribe(
      data => {
        this.pazienti = Object.values(data);
        this.pazienteService.setPazienti(this.pazienti);
      }
    );
  }

  ngOnInit() {
    console.log("La lunghezza dell'array dei pazienti è " + this.pazienti.length);
  }

  creaPaziente() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
