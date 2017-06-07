import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecureBaseComponent } from './precure-base.component';

describe('PrecureBaseComponent', () => {
  let component: PrecureBaseComponent;
  let fixture: ComponentFixture<PrecureBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecureBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecureBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
