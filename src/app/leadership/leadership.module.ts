import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadershipComponent } from './leadership.component';



@NgModule({
  declarations: [LeadershipComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LeadershipComponent
  ]
})
export class LeadershipModule { }
