import { Injectable } from '@angular/core';

@Injectable()
export class SbstatusService {

  public loading: boolean;
  public setLoading(value: boolean) {
    this.loading = value;
  }


  constructor() {
    this.loading = true;
  }

}
