import { Component, EventEmitter, OnInit } from '@angular/core';

import { SbhttpService } from './../sbhttp.service';
import { UpdateProfileRequest } from './../shared/model/UpdateProfileRequest';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  outputs: ['addTodoItem']
})
export class AddFormComponent implements OnInit {

  // @Output() (alternative way)
  addTodoItem = new EventEmitter();
  todoText = '';
  isOver: boolean;

  constructor(private sbsvc: SbhttpService) { }

  ngOnInit() {
  }

  addTodoFORM($event: MouseEvent) {
    console.log('mmmmmmmmmaddTodoFORM button clicked', $event);
    console.log('mmmmmmmmmaddTodoFORM emmiting', this.todoText);
    this.addTodoItem.emit(this.todoText);
  }

  sbCallGET() {
    this.sbsvc.getReview();
  }

  sbThrow() {
    this.sbThrow2();
    throw new Error('I purposely threw this General Error.');
  }

  sbThrow2() {
    throw new TypeError('I purposely threw this Type Error.');
  }

  sbCallPOST() {
    const post_data = <UpdateProfileRequest>{};
    post_data.alternateEmail = this.todoText || 'tencent@gmail.com';
    post_data.alternateMobile = '777888';

    this.sbsvc.updateMydata(post_data).subscribe(
      data => {
        // MyData object is already populated by service. Do something else.
        console.log('Ok, done.');
      },
      err => {
        // Handle the error that was passed all the way from service layer.
        confirm('ja lat!' + err);
        console.log('Update data failed, try again. Details: ', err);
        // this.configservice.showErrorModal = true; (show display a error popup)
        // this.router.navigate(['/perX']); (or redirect)
      }
    )

  }

}
