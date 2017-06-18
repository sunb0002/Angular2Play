import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precure',
  templateUrl: './precure.component.html',
  styleUrls: ['./precure.component.css']
})
export class PrecureComponent implements OnInit {

  cureID: string;
  constructor(private _newrouter: ActivatedRoute, private _oldrouter: Router) { }

  ngOnInit() {
    //console.log("PrecureComponent _oldrouter:", this._oldrouter);
    // console.log('PrecureComponent ActivatedRoute.data: ', this._newrouter.data);
    // console.log('PrecureComponent ActivatedRoute.snapshot.data: ', this._newrouter.snapshot.data); // Injected by Guards (Note: won't propagate from higher level)


    const id: Observable<string> = this._newrouter.params.map(p => p.id);
    id.subscribe(data => {
      console.log('const id data', data);
    });

    const url: Observable<string> = this._newrouter.url.map(segments => segments.join(''));
    // route.data includes both `data` and `resolve`
    const user = this._newrouter.data.map(d => d.user);

    this._newrouter.params.subscribe(params => {
      console.log('params', params);
      this.cureID = params.id;
    });
    this._newrouter.url.subscribe(segments => {
      // console.log('segments', segments.join('')); // segments 1
    });
  }
}
