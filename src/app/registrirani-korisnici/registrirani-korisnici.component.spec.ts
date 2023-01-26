import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistriraniKorisniciComponent } from './registrirani-korisnici.component';

describe('RegistriraniKorisniciComponent', () => {
  let component: RegistriraniKorisniciComponent;
  let fixture: ComponentFixture<RegistriraniKorisniciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistriraniKorisniciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistriraniKorisniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
