import { Component, OnInit, EventEmitter } from '@angular/core';
import { Info } from '../InfoModel';
import { NgForm } from '@angular/forms';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-registriracija',
  templateUrl: './registriracija.component.html',
  styleUrls: ['./registriracija.component.scss']
})
export class RegistriracijaComponent implements OnInit {

  constructor(public InfoService: InfoService ) { }

  ngOnInit(): void {
  }
  enteredName = '';
  enteredPlace = '';
  enteredEmail = '';




  onAddInfo(form:NgForm) {

this.InfoService.dodajInfo(form.value.imeIPrezime, form.value.mjestoRadova, form.value.email);
form.resetForm();
  }
}
