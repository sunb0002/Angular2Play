import { UpdateProfileRequest } from './../shared/model/UpdateProfileRequest';
import { SbhttpService } from './../sbhttp.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  sbCallGET() {
    this.sbsvc.getReview();
  }

  sbCallPOST() {
    let post_data = <UpdateProfileRequest>{};
    post_data.alternateEmail =  'tencent@gmail.com';
    post_data.alternateMobile = '777888';

    this.sbsvc.updateMydata(post_data).subscribe(
      data => {
        // MyData object is already populated by service. Do something else.
        console.log('Ok, done.');
      },
      err => {
        // Handle the error that was passed all the way from service layer.
        console.log('Update data failed, try again. Details: ', err);
        // this.configservice.showErrorModal = true; (show display a error popup)
        // this.router.navigate(['/perX']); (or redirect)
      }
    )

  }

}
