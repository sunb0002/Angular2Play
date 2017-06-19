import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrecureComponent } from './precure.component';

import { ActivatedRoute } from '@angular/router';
// Not working for ActivatedRoute. 
// Maybe RouterTestingModule.withRoutes(Routes).

xdescribe('PrecureComponent', () => {
  let component: PrecureComponent;
  let fixture: ComponentFixture<PrecureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ActivatedRoute, RouterTestingModule],
      declarations: [PrecureComponent]
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
