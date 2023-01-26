import { Injectable } from '@angular/core';
import { Info } from './InfoModel';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class InfoService {
  private infos: Info[] = [];
  private infoUpdejtan = new Subject<Info[]>();

  dohvatiInfo() {
    return [...this.infos];
  }

  dohvatiUpdejtaniInfoListener() {
    return this.infoUpdejtan.asObservable();
  }

  dodajInfo(imeIPrezime: string, mjesto: string, email: string) {
    const info: Info = { imeIPrezime: imeIPrezime, mjesto: mjesto, email: email };
    this.infos.push(info);
    this.infoUpdejtan.next([...this.infos]);
  }


  constructor() { }
}
