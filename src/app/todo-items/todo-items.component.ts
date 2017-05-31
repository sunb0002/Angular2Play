import { TodoItem } from '../shared/todo-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('items')
  theTodoItems: TodoItem[];

  constructor() { }

  ngOnInit() {
  }

}
