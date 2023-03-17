import { Injectable } from '@angular/core';
import { Visita } from '../model/visita.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {
  visiteChanged = new Subject<Visita[]>()

  visite: Visita[] = []
  constructor(private http: HttpClient) { }

  getVisite() {
    return this.http.get<Visita[]>('https://gestione-visite-default-rtdb.firebaseio.com/visite.json');
}

  getLastVisitaId() {
    let m = Math.max(...this.visite.map(o => o.numeroVisita));
    console.log("M VALE ");
    console.log(m);
    if(m == null || m == Number.NEGATIVE_INFINITY) return 0;
    else return m;
  }

  setVisite(visite: Visita[]) {
    this.visite = visite;
  }

  deleteVisita(visitaNumber: number) {
    let visitaIndex = this.visite.findIndex((obj => obj.numeroVisita == visitaNumber));
    if (visitaIndex > -1) {
      this.visite.splice(visitaIndex, 1);
      this.http.put('https://gestione-visite-default-rtdb.firebaseio.com/visite.json', this.visite).subscribe(
      response => {
        console.log(response);
      }
    );
      this.visiteChanged.next(this.visite.slice());
   }
  }

  addVisita(visita: Visita) {
    this.visite.push(visita);
    this.visiteChanged.next(this.visite.slice());

    this.http.post('https://gestione-visite-default-rtdb.firebaseio.com/visite.json', visita).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
