import { SbauthService } from './../../sbauth/sbauth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Persona2Component } from './persona2.component';

describe('Persona2Component', () => {
  let component: Persona2Component;
  let fixture: ComponentFixture<Persona2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Persona2Component],
      providers: [SbauthService] // Must put your service as Providers!!!
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Persona2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
