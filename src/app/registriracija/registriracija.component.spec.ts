import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistriracijaComponent } from './registriracija.component';

describe('RegistriracijaComponent', () => {
  let component: RegistriracijaComponent;
  let fixture: ComponentFixture<RegistriracijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistriracijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistriracijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
