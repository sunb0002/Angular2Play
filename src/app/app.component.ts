import { SbstatusService } from './sbstatus.service';
import { SbhttpService } from './sbhttp.service';
import { TodoItem, TodoItemClass } from './shared/todo-item';
import { Component } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  //todoItems: TodoItem[];

  constructor(private sbsvc: SbhttpService, private s2: SbstatusService) {
  }

  ngOnInit() {

    Observable.forkJoin(this.sbsvc.testDelay1(), this.sbsvc.datasource()).subscribe(
      data => {
        console.log('ROOT ngOnInit: ', data);
        this.s2.setLoading(false);
      }
    );
  }


}
