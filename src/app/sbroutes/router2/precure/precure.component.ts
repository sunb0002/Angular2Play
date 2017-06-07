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
    console.log("PrecureComponent _newrouter:", this._newrouter);

    const id: Observable<string> = this._newrouter.params.map(p => p.id);
    const url: Observable<string> = this._newrouter.url.map(segments => segments.join(''));
    // route.data includes both `data` and `resolve`
    const user = this._newrouter.data.map(d => d.user);

    this._newrouter.params.subscribe(params => {
      console.log('params', params);
      this.cureID = params.id;
    });
    this._newrouter.url.subscribe(segments => {
      console.log('segments', segments.join(''));
    });
  }
}
