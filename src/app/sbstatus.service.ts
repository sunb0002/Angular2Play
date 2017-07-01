import { Injectable } from '@angular/core';

@Injectable()
export class SbstatusService {

  private loading: boolean;
  public setLoading(value: boolean) {
    this.loading = value;
  }


  constructor() {
    this.loading = true;
  }

}
