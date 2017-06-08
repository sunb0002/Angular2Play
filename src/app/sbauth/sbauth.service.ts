import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class SbauthService {
    constructor() {
    }

    private authenticated: boolean = true;
    public isAuthenticated(): boolean {

        console.log('SbauthService isAuthenticated: ' + this.authenticated);
        return this.authenticated;
    }

    addAuth(): void {
        this.authenticated = true;
    }
    removeAuth(): void {
        console.log('SbauthService removeAuth!');
        this.authenticated = false;
    }



}
