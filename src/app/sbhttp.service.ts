import { CatalogueApi } from './shared/CatalogueApi';
// import { APIS } from './shared/api';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class SbhttpService {

  public mydata;
  constructor(private cataapi: CatalogueApi) {
  }

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

  public datasource(): Observable<{}> {
    return Observable.of({ dddd: '@@@@This is DB data@@@@' }).delay(3000);
  }

  public testDelay1(): Observable<string> {
    return Observable.of("testDelay1 offff").delay(2000);
  }

  public testDelay1b(): Observable<string> {
    return this.datasource().do(v => {
      console.log('testDelay1bbbbb', v);
    });
  }

/**
 * 
 * Successfully implemented data loading service.
 * 
 * @returns {Observable<any>} 
 * @memberof SbhttpService
 */
  public testDelay1c(): Observable<any> {

    if (this.mydata) {
      return Observable.of('No need to reload data!');
    } else {
      return this.datasource().do(source => {
        console.log('Reloading data!');
        this.mydata = source;
      });
    }



    // return this.datasource().map(source => {
    //   console.log('testDelay1c checking if data is already there=', this.mydata);
    //   if (!this.mydata) {
    //     this.mydata = source;
    //     return source;
    //   } else {
    //     return Observable.of('No need to reload data!');
    //   }
    // });
  }

  public testDelay2(): Observable<string> {

    // this.testDelay1().subscribe(data => console.log('testDelay2 subscribe testDelay1:', data));
    // console.log('****testing Delay222222');
    // When testDelay2() is subscribed，Delay1 will execute ASYNClly

    console.log('****testing Delay22222');
    // return Observable.of("testDelay2 offff").delay(2000);
    return Observable.throw("testDelay2 offff").delay(2000);
  }





  public testDelay3(): Observable<string> {

    // RXJS subject turns "cold" Obserbale to "Hot"
    // But it's useless in this applicaiton.
    let subject = new Subject();
    subject.subscribe({
      next: (v) => console.log('---------observerA: ' + v)
    });

    subject.next(1);
    subject.delay(2000);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log('---------observerB: ' + v)
    });
    subject.next(3);
    subject.next(4);
    subject.complete();

    // return subject;
    return subject.asObservable();


  }
}
