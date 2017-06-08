import { SbresolveGuard } from './sbresolve.guard';
import { SbauthGuard } from './sbauth.guard';
import { SbauthService } from './sbauth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SbauthGuard, SbauthService, SbresolveGuard]
})
export class SbauthModule { }
