import { TodoItem } from '../shared/todo-item';
import { Component, OnInit, Input } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  public theTodoItems: TodoItem[];

  constructor(private todoSvc: TodoListService) { }

  ngOnInit() {
    this.theTodoItems = this.todoSvc.getTodoItems();
  }

  deleteItem(id: number) {
    console.log("deleteItem=" + id);
    this.todoSvc.deleteItem(id);
  }

}
