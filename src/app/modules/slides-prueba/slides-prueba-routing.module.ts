import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidesPruebaComponent } from './views/slides-prueba.component';

const routes: Routes = [
  {
    path:'',
    component:SlidesPruebaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlidesPruebaRoutingModule { }
