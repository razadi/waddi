import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NofoundRoutingModule } from './nofound-routing.module';
import { NofoundComponent } from './nofound.component';


@NgModule({
  declarations: [
    NofoundComponent
  ],
  imports: [
    CommonModule,
    NofoundRoutingModule
  ]
})
export class NofoundModule { }
