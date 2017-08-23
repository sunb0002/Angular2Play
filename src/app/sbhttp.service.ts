import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

import { CatalogueApi } from './shared/CatalogueApi';
import { UpdateProfileRequest } from './shared/model/UpdateProfileRequest';

// import { APIS } from './shared/api';
@Injectable()
export class SbhttpService {

  public mydata;
  constructor(private cataapi: CatalogueApi) {
  }

  updateMydata(requestParams: UpdateProfileRequest): Observable<any> {

    return this.cataapi.updateProfileUsingPOST(requestParams).do(
      response => {
        console.log('Request to update UserProfile: %o. Response: %o', requestParams, response);
        if (response.status > 300) {
          
          throw Observable.throw(JSON.stringify(response));
        } else {
          this.mydata = response.data as string;
        }
      }
    ).catch(
      err => {
        console.log('Failed to update UserProfile:', err);
        return err;
      }
      );
  }

  public getReview(): void {

    let $obj1 = this.cataapi.getCatalogueCategoriesUsingGET().retry(1)
    .map(
      data => {
        console.log('get Review dataaaaaa', data.title);
        return data.title + '23333';
      }
    ).catch(
      res => {
        console.log("HTTP ERROR CATCHED! ", res);
        return Observable.throw(res);
      }
    );
    // console.log('SbhttpService $obj1<Observable>:', $obj1);

    $obj1.switchMap(
      data => {
        return Observable.throw(data + 'switchedMapppp');
      }
    )
    .subscribe(
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

  public testDelay1b(): Observable<any> {
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
