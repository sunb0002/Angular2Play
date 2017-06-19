import { Http, ConnectionBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TodoListService } from './todo-list.service';
import { DonepipePipe } from './donepipe.pipe';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { AddFormComponent } from './add-form/add-form.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MdlModule } from '@angular-mdl/core';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdlModule, RouterTestingModule, FormsModule],
      declarations: [
        AppComponent, // Must declare all the components used!
        SidebarComponent,
        HeaderComponent,
        AddFormComponent,
        TodoItemsComponent,
        DonepipePipe
      ],
      providers: [TodoListService, Http, MockBackend, ConnectionBackend]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  xit(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance;
    expect(appComponent.title).toEqual('app works!');
  }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
