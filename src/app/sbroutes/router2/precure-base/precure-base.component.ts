import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precure-base',
  templateUrl: './precure-base.component.html',
  styleUrls: ['./precure-base.component.css']
})
export class PrecureBaseComponent implements OnInit {

  constructor(private oldrouter: Router, private route: ActivatedRoute) {
    console.log('PrecureBaseComponent route info2: ', this.route.snapshot.data);

    oldrouter.events.subscribe(event => {
      console.log("PrecureBaseComponent Listening to router event:", event);
    });
  }

  ngOnInit() {
  }

}
