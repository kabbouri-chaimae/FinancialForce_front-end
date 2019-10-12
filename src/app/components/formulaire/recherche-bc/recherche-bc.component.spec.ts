import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheBcComponent } from './recherche-bc.component';

describe('RechercheBcComponent', () => {
  let component: RechercheBcComponent;
  let fixture: ComponentFixture<RechercheBcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheBcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
