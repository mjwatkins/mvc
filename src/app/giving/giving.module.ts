import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GivingComponent } from './giving.component';



@NgModule({
  declarations: [GivingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GivingComponent
  ]
})
export class GivingModule { }
