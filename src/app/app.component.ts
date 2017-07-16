import { AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { SbhttpService } from './sbhttp.service';
import { SbstatusService } from './sbstatus.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
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

  ngAfterViewInit() {

    // const $ = jQuery;

    $(document).ready(function () {
      $('.menu-link').bigSlide({
        menu: '#menu',
        side: 'right',
        easyClose: 'true'
      });
      console.log('bigslide');

      $('#search-button').on('click', function (e) {
        if ($('#search-input-container').hasClass('hdn')) {
          e.preventDefault();
          $('#search-input-container').removeClass('hdn')
          return false;
        }
        console.log('search click');
      });

      $('#hide-search-input-container').on('click', function (e) {
        e.preventDefault();
        $('#search-input-container').addClass('hdn')
        console.log('search click222');
        return false;
      });
    });


  }


}
