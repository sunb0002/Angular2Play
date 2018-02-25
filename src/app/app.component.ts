import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { SbhttpService } from './sbhttp.service';
import { SbstatusService } from './sbstatus.service';

declare const jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app works!';
  // todoItems: TodoItem[];

  public notificationOptions = {
    position: ['middle', 'right'],
    lastOnBottom: false,
    timeOut: 2000
  };

  constructor(private sbsvc: SbhttpService, public s2: SbstatusService) {
  }

  ngOnInit() {

    Observable.forkJoin(this.sbsvc.testDelay1(), this.sbsvc.datasource()).subscribe(
      data => {
        console.log('ROOT ngOnInit: ', data);
        this.s2.setLoading(false);
      }
    );
  }

  ngAfterViewInit() {
    console.log('AppComponent ngAfterViewInit done.');
  }
}

export function loadjQuery() {

  console.log('Common loadjQuery start.');
  const $ = jQuery;

  $(document).ready(function () {
    $('.menu-link').bigSlide({
      menu: '#menu',
      side: 'right',
      easyClose: 'true'
    });

    console.log('Common Document ready bigslide');

    $('#search-button').on('click', function (e) {
      if ($('#search-input-container').hasClass('hdn')) {
        e.preventDefault();
        $('#search-input-container').removeClass('hdn')
        return false;
      }
    });

    $('#hide-search-input-container').on('click', function (e) {
      e.preventDefault();
      $('#search-input-container').addClass('hdn')
      return false;
    });
  });

}




