import { TodoListService } from './../todo-list.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() addTodoItem;

  constructor(private todoSvc: TodoListService) { }

  ngOnInit() {
  }

  addTodo(text: string) {
    //let itemX = new TodoItemClass((new Date().getTime()), text, false);
    //console.log('mmmmmm addTodo itemX:', itemX);
    this.todoSvc.addTodo(text);
  }
}
