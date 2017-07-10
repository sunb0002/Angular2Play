import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { SbhttpService } from './sbhttp.service';
import { SbstatusService } from './sbstatus.service';

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
