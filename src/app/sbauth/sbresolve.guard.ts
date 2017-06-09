import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { TodoListService } from './../todo-list.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SbresolveGuard implements Resolve<string> {
    constructor(private svc: TodoListService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
        console.log('SbresolveGuard getting the data');
        // setTimeout(() => {
        //     this.svc.httpGetList();
        //     console.log('SbresolveGuard finished getting the data');
        // }, 4000);
        
        // Note: must return Obserable<> object, otherwise router will not wait for the data to be loaded.
        return Observable.of("SbresolveGuardddddddddd").delay(1000);
    }
}
