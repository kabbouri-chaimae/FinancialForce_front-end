import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheConsultationComponent } from './recherche-consultation.component';

describe('RechercheConsultationComponent', () => {
  let component: RechercheConsultationComponent;
  let fixture: ComponentFixture<RechercheConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
