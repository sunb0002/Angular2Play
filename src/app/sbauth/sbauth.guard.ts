import { SbauthService } from './sbauth.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class SbauthGuard implements CanActivate {
    constructor(private auth: SbauthService, private router: Router) {

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.auth.isAuthenticated()) {
            console.log('AUTH GUARD PASSED.');
            return true;
        } else {
            console.log('BLOCKED BY AUTH GUARD');
            this.router.navigate(['/unauthorized']);
            return false;
        }

    }
}
