import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltramanComponent } from './ultraman.component';

describe('UltramanComponent', () => {
  let component: UltramanComponent;
  let fixture: ComponentFixture<UltramanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltramanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltramanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
