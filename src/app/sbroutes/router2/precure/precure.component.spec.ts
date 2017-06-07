import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecureComponent } from './precure.component';

describe('PrecureComponent', () => {
  let component: PrecureComponent;
  let fixture: ComponentFixture<PrecureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
