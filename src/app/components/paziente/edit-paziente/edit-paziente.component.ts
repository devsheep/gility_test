import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Paziente } from 'src/app/model/paziente.model';
import { PazienteService } from 'src/app/services/paziente.service';

@Component({
  selector: 'app-edit-paziente',
  templateUrl: './edit-paziente.component.html',
  styleUrls: ['./edit-paziente.component.css']
})
export class EditPazienteComponent {
  codiceFiscale: string;
  editMode = false;
  pazienteForm: FormGroup;

  constructor(private route: ActivatedRoute, private pazienteService: PazienteService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.codiceFiscale = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  submit() {
    const nuovoPaziente: Paziente = {
      'codiceFiscale': this.pazienteForm.value['codiceFiscale'],
      'name': this.pazienteForm.value['name'],
      'address': this.pazienteForm.value['address'],
      'age': this.pazienteForm.value['age'],
      'gender': this.pazienteForm.value['gender'],
    };

    if (this.editMode) {
      this.pazienteService.updatePaziente(this.codiceFiscale, nuovoPaziente);
    } else {
      this.pazienteService.addPaziente(nuovoPaziente);
    }

    this.cancel();
  }

  cancel() {
    //this.router.navigate(['../'], {relativeTo: this.route});
    this.router.navigate(['/pazienti']);
  }

  initForm() {
    let codiceFiscale = '';
    let name = '';
    let age = 0;
    let address = '';
    let gender: string | undefined = '';

    if (this.editMode) {
      const paziente = this.pazienteService.getPaziente(this.codiceFiscale);

      codiceFiscale = paziente.codiceFiscale;
      name = paziente.name;
      age = paziente.age;
      address = paziente.address;
      gender = paziente.gender;
    }

    this.pazienteForm = new FormGroup({
      'codiceFiscale': new FormControl(codiceFiscale, Validators.required),
      'name': new FormControl(name, Validators.required),
      'age': new FormControl(age, [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'address': new FormControl(address, Validators.required),
      'gender': new FormControl(gender, Validators.required)
    });
  }
}
