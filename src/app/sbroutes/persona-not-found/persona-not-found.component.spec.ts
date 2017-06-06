import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaNotFoundComponent } from './persona-not-found.component';

describe('PersonaNotFoundComponent', () => {
  let component: PersonaNotFoundComponent;
  let fixture: ComponentFixture<PersonaNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
