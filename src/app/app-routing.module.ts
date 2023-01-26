import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleriaComponent } from './galleria/galleria.component';
import { OZavrsenomPosluComponent } from './o-zavrsenom-poslu/o-zavrsenom-poslu.component';
import { OAutoruComponent } from './o-autoru/o-autoru.component';
import { OMajstoruComponent } from './o-majstoru/o-majstoru.component';
import { ZatraziPosaoKorisnikComponent } from './zatrazi-posao-korisnik/zatrazi-posao-korisnik.component';
import { RegistriracijaComponent } from './registriracija/registriracija.component';
import { RegistriraniKorisniciComponent } from './registrirani-korisnici/registrirani-korisnici.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 'index',
  pathMatch: 'full',
}, {
  path: 'index',
  component: GalleriaComponent,
}, {
  path: 'oposlu',
  component: OZavrsenomPosluComponent,
}, {
  path: 'oautoru',
  component: OAutoruComponent,
}, {
  path: 'omajstoru',
  component: OMajstoruComponent,
},  {
  path: 'zatraziposao',
  component: ZatraziPosaoKorisnikComponent,
}, {
  path: 'registracija',
  component: RegistriracijaComponent,
}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
