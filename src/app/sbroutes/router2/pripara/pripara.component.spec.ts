import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriparaComponent } from './pripara.component';

describe('PriparaComponent', () => {
  let component: PriparaComponent;
  let fixture: ComponentFixture<PriparaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriparaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
