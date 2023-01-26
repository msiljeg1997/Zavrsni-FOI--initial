import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OZavrsenomPosluComponent } from './o-zavrsenom-poslu.component';

describe('OZavrsenomPosluComponent', () => {
  let component: OZavrsenomPosluComponent;
  let fixture: ComponentFixture<OZavrsenomPosluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OZavrsenomPosluComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OZavrsenomPosluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
