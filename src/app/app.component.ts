import { TodoItem, TodoItemClass } from './shared/todo-item';
import { Component } from '@angular/core';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  //todoItems: TodoItem[];

  constructor(private todoSvc: TodoListService) {
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // let item1 = new TodoItemClass(1, 'Todo Item No.1', false);
    // let item2 = new TodoItemClass(2, 'Todo Item No.2', false);
    // let item3 = new TodoItemClass(3, 'Todo Item No.3', false);
    // this.todoItems = new Array(item1, item2, item3);
    //this.todoItems = this.todoSvc.getTodoList();
  }

  addTodo(text: string) {
    //let itemX = new TodoItemClass((new Date().getTime()), text, false);
    //console.log('mmmmmm addTodo itemX:', itemX);
    this.todoSvc.addTodo(text);
  }
}
