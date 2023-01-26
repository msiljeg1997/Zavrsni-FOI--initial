import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-zatrazi-posao-korisnik',
  templateUrl: './zatrazi-posao-korisnik.component.html',
  styleUrls: ['./zatrazi-posao-korisnik.component.scss']
})
export class ZatraziPosaoKorisnikComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
onAddPost(form: NgForm){
  if (form.invalid)
  return;
}

}
