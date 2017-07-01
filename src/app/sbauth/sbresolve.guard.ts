import { SbhttpService } from './../sbhttp.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { TodoListService } from './../todo-list.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import 'rxjs/add/operator/catch';

@Injectable()
export class SbresolveGuard implements Resolve<any> {
    constructor(private svc: TodoListService, private sbsvc: SbhttpService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('SbresolveGuard getting data');
        // setTimeout(() => {
        //     this.svc.httpGetList();
        //     console.log('SbresolveGuard finished getting the data');
        // }, 4000);
        // Note: must return Obserable<> object, otherwise router will not wait for the data to be loaded.

        // Solution 1======================
        // this.sbsvc.testDelay1().subscribe(data => {
        //     console.log('testDelay1 in SbresolveGuard:', data);
        //     console.log('SbresolveGuard check1');
        // });
        // this.sbsvc.testDelay2().subscribe(data => {
        //     console.log('testDelay2 in SbresolveGuard:', data);
        //     console.log('SbresolveGuard check2');
        // });
        // return Observable.of('SbresolveGuard okkkkkkkkkk');
        // ================================

        // Solution 2======================
        const $obs = Observable.forkJoin(this.sbsvc.testDelay1()).catch(
            err => {
                console.log('Resolve Guard FAILD(Catch):', err);
                this.router.navigate(['/perX']);
                return Observable.of('SbresolveGuard(Catch) Noooooooo'); // Dont use throw.
            }
        );

        // $obs.subscribe(
        //     data => {
        //         console.log('Resolve Guard PASSED');
        //         // return Observable.of('SbresolveGuard okkkkkkkkkk'); //Useless
        //     }
        //     // err => {
        //     //     console.log('Resolve Guard FAILD:', err);
        //     //     // return Observable.throw('SbresolveGuard Noooooooo'); //Useless
        //     // }
        // ); No need to subscribe, as the resolver guard will do the subscribe.
        let $obs2 = this.sbsvc.testDelay1c();
        return $obs2;
        // Note: forkJoin returns array like [obs1, obs2], resolve guard can't recognize directly.
        // ================================
    }
}
