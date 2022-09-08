import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './views/listado.component';

const routes: Routes = [
  {
    path: '',
    component:ListadoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ListadoRoutingModule { }
