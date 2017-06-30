import { SbhttpService } from './../sbhttp.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  outputs: ['addTodoItem']
})
export class AddFormComponent implements OnInit {

  // @Output() (alternative way)
  addTodoItem = new EventEmitter();
  todoText: string = '';
  isOver: boolean;

  constructor(private sbsvc: SbhttpService) { }

  ngOnInit() {
  }

  addTodoFORM($event: MouseEvent) {
    console.log('mmmmmmmmmaddTodoFORM button clicked', $event);
    console.log('mmmmmmmmmaddTodoFORM emmiting', this.todoText);
    this.addTodoItem.emit(this.todoText);
  }

  sbCall() {
    this.sbsvc.getReview();
  }

}
