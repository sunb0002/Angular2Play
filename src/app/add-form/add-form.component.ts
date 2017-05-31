import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  @Output()
  addTodoItem = new EventEmitter();
  todoText: string = '';

  constructor() { }

  ngOnInit() {
  }

  addTodo($event: MouseEvent) {
    console.log('mmmmmmmmmAdd button clicked!', $event);
    this.addTodoItem.emit(this.todoText);
  }

}
