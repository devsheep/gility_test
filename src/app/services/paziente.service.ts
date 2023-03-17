import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Paziente } from '../model/paziente.model';

@Injectable({
  providedIn: 'root'
})
export class PazienteService {

  pazientiChanged = new Subject<Paziente[]>()
  pazienti: Paziente[] = []

  pazienteEmpty: Paziente = { codiceFiscale: "Non definito", name: "Non definito", age: 0, address: "Non definito", gender: "Non definito"}

  constructor(private http: HttpClient) { }

  getPazienti() {
      return this.http.get<Paziente[]>('https://gestione-visite-default-rtdb.firebaseio.com/pazienti.json');
  }

  getPaziente(cf: string) {
    let paziente = this.pazienti.filter(obj => obj.codiceFiscale === cf);

    if (paziente !== null && (Object.keys(paziente).length !== 0)) {
      return paziente[0];
    }

    return this.pazienteEmpty;
  }

  setPazienti(pazienti: Paziente[]) {
    this.pazienti = pazienti;
  }

  addPaziente(paziente: Paziente) {
    this.pazienti.push(paziente);
    this.pazientiChanged.next(this.pazienti.slice());

    this.http.post('https://gestione-visite-default-rtdb.firebaseio.com/pazienti.json', paziente).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  updatePaziente(codiceFiscale: string, nuovoPaziente: Paziente) {
    let pazienteIndex = this.pazienti.findIndex((obj => obj.codiceFiscale == codiceFiscale));
    this.pazienti[pazienteIndex] = nuovoPaziente;
    this.http.put('https://gestione-visite-default-rtdb.firebaseio.com/pazienti.json', this.pazienti).subscribe(
      response => {
        console.log(response);
        this.pazientiChanged.next(this.pazienti.slice());
      }
    );
  }

  deletePaziente(codiceFiscale: string) {
    let pazienteIndex = this.pazienti.findIndex((obj => obj.codiceFiscale == codiceFiscale));
    if (pazienteIndex > -1) {
      this.pazienti.splice(pazienteIndex, 1);
      this.http.put('https://gestione-visite-default-rtdb.firebaseio.com/pazienti.json', this.pazienti).subscribe(
      response => {
        console.log(response);
      }
    );
      this.pazientiChanged.next(this.pazienti.slice());
   }
  }
}
