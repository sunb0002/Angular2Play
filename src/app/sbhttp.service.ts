import { CatalogueApi } from './shared/CatalogueApi';
// import { APIS } from './shared/api';
import { Injectable } from '@angular/core';

@Injectable()
export class SbhttpService {

  constructor(private cataapi: CatalogueApi) { }

  public getReview() {

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

}
