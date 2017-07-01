import { CatalogueApi } from './shared/CatalogueApi';
// import { APIS } from './shared/api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SbhttpService {

  constructor(private cataapi: CatalogueApi) { }

  public getReview(): void {

    let $obj1 = this.cataapi.getCatalogueCategoriesUsingGET().retry(3).catch(
      res => {
        console.log("HTTP ERROR CATCHED! ", res);
        return res;
      }
    );
    console.log('SbhttpService $obj1<Observable>:', $obj1);

    $obj1.subscribe(
      (data) => console.log('data is: ', data),
      (err) => console.log('err is: ', err)
    );


  }

  public testDelay1(): Observable<string> {
    console.log('****testing Delay111111');
    return Observable.of("testDelay1 offff").delay(2000);
  }

  public testDelay2(): Observable<string> {

    // this.testDelay1().subscribe(data => console.log('testDelay2 subscribe testDelay1:', data));
    // console.log('****testing Delay222222');
    // When testDelay2() is subscribed，Delay1 will execute ASYNClly

    console.log('****testing Delay22222');
    // return Observable.of("testDelay2 offff").delay(2000);
    return Observable.throw("testDelay2 offff").delay(2000);
  }
}
