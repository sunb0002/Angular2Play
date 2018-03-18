import { ErrorHandler, Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
    constructor(private notificationSvc: NotificationsService) {
        super();
    }

    handleError(error) {
        if (error instanceof TypeError) {
            this.notificationSvc.warn('Type Error', error + ', Occured at: ' + location.href);
        } else {
            this.notificationSvc.error('General Error', error + ', Occured at: ' + location.href);
        }
    }
}
