import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OAutoruComponent } from './o-autoru.component';

describe('OAutoruComponent', () => {
  let component: OAutoruComponent;
  let fixture: ComponentFixture<OAutoruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OAutoruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OAutoruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
