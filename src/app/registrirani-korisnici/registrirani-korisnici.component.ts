import { Component, OnDestroy, OnInit } from '@angular/core';
import { Info } from '../InfoModel';
import { InfoService } from '../info.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-registrirani-korisnici',
  templateUrl: './registrirani-korisnici.component.html',
  styleUrls: ['./registrirani-korisnici.component.scss']
})
export class RegistriraniKorisniciComponent implements OnInit, OnDestroy{


infos: Info[] = [];
private infoSub: Subscription;

  constructor(public InfoService: InfoService) { }
  
  ngOnInit(): void {
    this.infos = this.InfoService.dohvatiInfo();
    this.infoSub = this.InfoService.dohvatiUpdejtaniInfoListener()
    .subscribe((infos: Info[])=>{
      this.infos = infos;
    });
  }
  
  
  ngOnDestroy(): void {
    this.infoSub.unsubscribe();
  }
  



}
