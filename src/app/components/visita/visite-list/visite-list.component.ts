import { Component } from '@angular/core';
import { Visita } from 'src/app/model/visita.model';
import { VisiteService } from 'src/app/services/visite.service';

@Component({
  selector: 'app-visite-list',
  templateUrl: './visite-list.component.html',
  styleUrls: ['./visite-list.component.css']
})
export class VisiteListComponent {
  visite: Visita[] = [];

  constructor(private visitaService: VisiteService) {
    this.visitaService.getVisite().subscribe(
      data => {
        this.visite = Object.values(data);
        this.visitaService.setVisite(this.visite);
      }
    );
  }

  ngOnInit() {
  }

  deleteVisita(visita: number) {
    this.visitaService.deleteVisita(visita);
  }
}
