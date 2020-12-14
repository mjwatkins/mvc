import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SisterChurchesComponent } from './sister-churches.component';



@NgModule({
  declarations: [SisterChurchesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SisterChurchesComponent
  ]
})
export class SisterChurchesModule { }
