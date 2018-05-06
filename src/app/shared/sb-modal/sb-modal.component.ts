import { Component } from '@angular/core';
import { SbmodalContent, SbmodalService } from 'app/services/sbmodal.service';

declare const jQuery: any;

@Component({
  selector: 'app-sb-modal',
  templateUrl: './sb-modal.component.html',
  styleUrls: ['./sb-modal.component.css']
})
export class SbModalComponent {

  public content: SbmodalContent;

  constructor(
    private modalSvc: SbmodalService
  ) {

    this.modalSvc.subject.subscribe(
      data => this.showModal(data as SbmodalContent)
    )

  }

  showModal(data: SbmodalContent) {
    console.log('Notification content is:', data);
    this.content = data;
    jQuery('#notification-modal').modal('show');
  }

  buttonClicked() {
    console.log('Modal button clicked.');
    this.content.callback.next(null);
    this.content.callback.complete();
  }


}
