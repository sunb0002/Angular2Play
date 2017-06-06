import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Persona3Component } from './persona3.component';

describe('Persona3Component', () => {
  let component: Persona3Component;
  let fixture: ComponentFixture<Persona3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Persona3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Persona3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
