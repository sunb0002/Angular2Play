import { Router } from '@angular/router';
import { SbauthService } from './../../sbauth/sbauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona2',
  templateUrl: './persona2.component.html',
  styleUrls: ['./persona2.component.css']
})
export class Persona2Component implements OnInit {

  constructor(private auth: SbauthService, private router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    console.log('Logout!');
    this.auth.removeAuth();
    this.router.navigate(['/perX']);
  }

}
