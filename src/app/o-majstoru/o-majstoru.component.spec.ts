import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMajstoruComponent } from './o-majstoru.component';

describe('OMajstoruComponent', () => {
  let component: OMajstoruComponent;
  let fixture: ComponentFixture<OMajstoruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OMajstoruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OMajstoruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
