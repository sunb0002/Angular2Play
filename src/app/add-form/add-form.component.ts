import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SbmodalService } from 'app/services/sbmodal.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators/catchError';
import { delay } from 'rxjs/operators/delay';
import { finalize } from 'rxjs/operators/finalize';

import { TodoListService } from '../todo-list.service';
import { SbhttpService } from './../sbhttp.service';
import { UpdateProfileRequest } from './../shared/model/UpdateProfileRequest';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {

  // @Output() (alternative way)
  @Output() addTodoItem = new EventEmitter();
  todoText = '';
  isOver: boolean;

  constructor(
    private sbsvc: SbhttpService,
    public todoSvc: TodoListService,
    private modalSvc: SbmodalService,
  ) { }

  ngOnInit() {
  }

  addTodoFORM($event: MouseEvent) {
    console.log('mmmmmmmmmaddTodoFORM button clicked', $event);
    console.log('mmmmmmmmmaddTodoFORM emmiting', this.todoText);
    this.addTodoItem.emit(this.todoText);
  }

  sbCallGET() {
    // this.sbsvc.getReview();
    this.todoSvc.httpGetList();
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

  sbTestObs(): void {

    console.log('-------Test start');
    forkJoin(
      of('11111'),
      of('22222').pipe(delay(1000)),
      of('33333').pipe(delay(2000)),
      _throw('44444').pipe(catchError(ex => of(ex))),
    ).pipe(
      finalize(() => console.log('-------Test end'))
    )
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );

  }

  sbTestModal(): void {
    this.modalSvc.send('This is title', 'This is description').subscribe(
      data => console.log('To execute any callback.')
    );
  }

}
