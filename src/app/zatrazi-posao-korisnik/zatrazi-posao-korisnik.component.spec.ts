import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZatraziPosaoKorisnikComponent } from './zatrazi-posao-korisnik.component';

describe('ZatraziPosaoKorisnikComponent', () => {
  let component: ZatraziPosaoKorisnikComponent;
  let fixture: ComponentFixture<ZatraziPosaoKorisnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZatraziPosaoKorisnikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZatraziPosaoKorisnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
