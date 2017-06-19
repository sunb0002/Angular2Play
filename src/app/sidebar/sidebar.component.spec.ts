import { DonepipePipe } from './../donepipe.pipe';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MdlModule } from '@angular-mdl/core';
import { TodoItemsComponent } from './../todo-items/todo-items.component';
import { AddFormComponent } from './../add-form/add-form.component';
import { HeaderComponent } from './../header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

xdescribe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdlModule, RouterTestingModule, FormsModule],
      declarations: [SidebarComponent, HeaderComponent,
        AddFormComponent,
        TodoItemsComponent, DonepipePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
