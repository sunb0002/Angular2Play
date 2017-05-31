import { Injectable } from '@angular/core';
import { TodoItem, TodoItemClass } from './shared/todo-item';

@Injectable()
export class TodoListService {

  private todoItems: TodoItem[];
  constructor() {
    this.initTodoItems();
  }

  initTodoItems() {
    let item1 = new TodoItemClass(1, 'Todo Item No.1', false);
    let item2 = new TodoItemClass(2, 'Todo Item No.2', false);
    let item3 = new TodoItemClass(3, 'Todo Item No.3', false);
    this.todoItems = new Array(item1, item2, item3);
    console.log('mmmmmmSERVICE initTodoItems:', this.todoItems);
  }

  getTodoList(): TodoItem[] {
    console.log('mmmmmmSERVICE getTodoList:', this.todoItems);
    return this.todoItems;
  }

  addTodo(text: string) {
    let itemX = new TodoItemClass((new Date().getTime()), text, false);
    console.log('mmmmmmSERVICE addTodo itemX:', itemX);
    this.todoItems.push(itemX);
  }

  deleteItem(item: TodoItem) {
    this.todoItems = this.todoItems.filter(tditem => tditem.id !== item.id);
  }

  toggleItemStatus(item: TodoItem) {
    item.done = !item.done;
  }

}
