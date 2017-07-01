import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { PrecureComponent } from '../precure/precure.component';

@Component({
  selector: 'app-precure-base',
  templateUrl: './precure-base.component.html',
  styleUrls: ['./precure-base.component.css']
})
export class PrecureBaseComponent implements OnInit {

  // @ViewChild(PrecureComponent)
  // child: PrecureComponent;

  constructor(private oldrouter: Router, private route: ActivatedRoute) {
    // console.log('PrecureBaseComponent ActivatedRoute.data: ', this.route.data);
    // console.log('PrecureBaseComponent ActivatedRoute.snapshot.data: ', this.route.snapshot.data); // Note: Injected from both router data and Guards

    // oldrouter.events.subscribe(event => {
    //   console.log("PrecureBaseComponent Listening to router event:", event);
    // });
  }

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //   // For @ViewChild
  //   console.log("Precure Child: ", this.child);
  // }

  onActivate(componentRef?:any) {
    console.log("*******Router version @ViewChild, componentRef=", componentRef);
    // Router version @ViewChild, componentRef= PrecureComponent {...}
  }

}
