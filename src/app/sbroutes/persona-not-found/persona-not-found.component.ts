import { loadjQuery } from '../../app.component';
import { AfterViewInit, Component, OnInit } from '@angular/core';

import { logMethod, logMethod3 } from '../../shared/sblog';

declare const jQuery: any;

@Component({
  selector: 'app-persona-not-found',
  templateUrl: './persona-not-found.component.html',
  styleUrls: ['./persona-not-found.component.css']
})
export class PersonaNotFoundComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  @logMethod3()
  ngAfterViewInit() {
    console.log('PersonaNotFoundComponent ngAfterViewInit done.');
    loadjQuery();
    this.lol();
  }

  // @logMethod4()
  lol() {
    console.log('lol');
  }

}




