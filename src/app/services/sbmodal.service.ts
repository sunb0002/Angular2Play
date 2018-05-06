import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SbmodalService {

  public subject = new Subject<SbmodalContent>();

  constructor() { }

  send(title: string, description: string, isError?: boolean): AsyncSubject<void> {
    const cb = new AsyncSubject<void>();
    const content: SbmodalContent = {
      isError: isError || false,
      title: title,
      description: description,
      callback: cb
    }
    this.subject.next(content);
    return cb;
  }

  sendAlert(title: string, description: string): AsyncSubject<void> {
    return this.send(title, description, true);
  }

}

export interface SbmodalContent {
  isError?: boolean;
  title: string;
  description: string;
  callback: AsyncSubject<void>
}
