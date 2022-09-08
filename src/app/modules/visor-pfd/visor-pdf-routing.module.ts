import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisorPdfComponent } from './views/visor-pdf.component';

const routes: Routes = [
    {
      path:'',
      component:VisorPdfComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisorPdfRoutingModule { }
