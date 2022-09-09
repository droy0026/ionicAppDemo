import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidesPruebaRoutingModule } from './slides-prueba-routing.module';
import { IonicModule } from '@ionic/angular';
import { SlidesPruebaComponent } from './views/slides-prueba.component';


@NgModule({
  declarations: [SlidesPruebaComponent],
  imports: [
    CommonModule,
    SlidesPruebaRoutingModule,
    IonicModule
  ]
})
export class SlidesPruebaModule { }
