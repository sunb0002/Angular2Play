import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { SerializationHelper, TodoItem, TodoItemClass } from './shared/todo-item';

/**
 * haha comment
 *
 * @export
 * @class TodoListService
 */
@Injectable()
export class TodoListService {

  constructor(private http: HttpClient) {


    // Cross domain Ajax call is ok
    // this.getTodoList();
    this.initTodoItems();
  }
  public todoItems: TodoItem[];

  public getTodoItems(): TodoItem[] {
    return this.todoItems;
  }


  initTodoItems() {
    const item1 = new TodoItemClass(1, 'Todo Item No.1', true);
    const item2 = new TodoItemClass(2, 'Todo Item No.2', false);
    const item3 = new TodoItemClass(3, 'Todo Item No.3', false);
    this.todoItems = new Array(item1, item2, item3);
    console.log('mmmmmmSERVICE initTodoItems:', this.todoItems);
  }


  getTodoList(): TodoItem[] {
    this.httpGetList();
    console.log('mmmmmmSERVICE getTodoList1:', this.todoItems);
    return this.todoItems;
  }

  addTodo(text: string) {
    const itemX = new TodoItemClass((new Date().getTime()), text, false);
    console.log('mmmmmmSERVICE addTodo itemX:', itemX);
    this.todoItems.push(itemX);
  }

  deleteItem(input: TodoItemClass | number) {
    console.log('SERVICE deleteItem: ', input);
    if (input instanceof TodoItemClass) {
      this.todoItems = this.todoItems.filter(tditem => tditem.id !== input.id);
    } else {
      this.todoItems = this.todoItems.filter(tditem => tditem.id !== input);
    }
    console.log('SERVICE deleteItem, new list: ', this.todoItems);
  }


  toggleItemStatus(item: TodoItem) {
    console.log('toggleItemStatus! item.id=' + item.id);
    item.done = !item.done;
  }

  httpGetList(): void {
    // const url1 = '/assets/todo-data2nd.json';
    const url1 = 'https://jsonplaceholder.typicode.com/posts/3';
    const obj1 = this.http.get(url1).map(sbres => sbres).retry(3).catch(
      res => {
        console.log('HTTP ERROR CATCHED! ', res);
        return res;
      }
    );
    // Observable.forkJoin([obj1$, obj2$]).subscribe(...)
    console.log('httpGetList obj1<Observable>:', obj1);
    obj1.subscribe(
      (data) => this.httpHandleData(data),
      (err) => this.httpHandleError(err),
      () => this.httpHandleComplete()
    );
  }

  httpHandleData(data) {
    console.log('kkkkkkSERVICE httpHandleData: ', data);

    try {
      const u = new TodoItemClass();
      u.fromJSON(data);
      console.log('httpHandleData 1111=', u); // Solution 1: write method "fromJSON" within class

      const u2temp: string = JSON.parse(JSON.stringify(data));
      const u2: TodoItemClass = Object.assign(new TodoItemClass(), u2temp);
      console.log('httpHandleData 2222=', u2); // Solution 2: use out-of-box method "JSON.parse"

      const u3: TodoItemClass = SerializationHelper.toInstance2(new TodoItemClass(), JSON.stringify(data));
      console.log('httpHandleData 3333=', u3);
      // console.log("httpHandleData 3333=", u3.getID());
      // Solution 3: write out-of-box method "JSerializationHelper.toInstance2"


    } catch (e) {
      console.log('httpHandleData eeee=', e);
    }

  }

  httpHandleError(error) {
    console.log('kkkkkkSERVICE httpHandleError:', error)
    return Observable.throw(error);
  }

  httpHandleComplete() {
    console.log('kkkkkkSERVICE Completed!');
  }



}
