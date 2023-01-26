import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {CdkTableModule} from '@angular/cdk/table';
import { DatePipe } from '@angular/common';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { OZavrsenomPosluComponent } from './o-zavrsenom-poslu/o-zavrsenom-poslu.component';
import { OMajstoruComponent } from './o-majstoru/o-majstoru.component';
import { HeaderComponent } from './header/header/header.component';
import { ZatraziPosaoKorisnikComponent } from './zatrazi-posao-korisnik/zatrazi-posao-korisnik.component';
import { RegistriracijaComponent } from './registriracija/registriracija.component';
import { RegistriraniKorisniciComponent } from './registrirani-korisnici/registrirani-korisnici.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleriaComponent,
    OZavrsenomPosluComponent,
    OMajstoruComponent,
    HeaderComponent,
    ZatraziPosaoKorisnikComponent,
    RegistriracijaComponent,
    RegistriraniKorisniciComponent
    

  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    CdkTableModule,
    DatePipe,
    TextFieldModule,
    MatMenuModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
