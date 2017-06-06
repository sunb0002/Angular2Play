import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Persona1Component } from './persona1.component';

describe('Persona1Component', () => {
  let component: Persona1Component;
  let fixture: ComponentFixture<Persona1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Persona1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Persona1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
