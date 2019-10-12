import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestFourComponent } from './gest-four.component';

describe('GestFourComponent', () => {
  let component: GestFourComponent;
  let fixture: ComponentFixture<GestFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
