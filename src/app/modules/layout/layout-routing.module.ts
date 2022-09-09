import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/views/home.component';
import { LayoutComponent } from './views/layout.component';

const routes: Routes = [
  {
    path: '',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'home',
        component:HomeComponent

      },
      {
        path: 'listado',
        loadChildren: () => import('src/app/modules/listado/listado.module').then((module) => module.ListadoModule),
      },
      {
        path: 'visor',
        loadChildren: () => import('src/app/modules/visor-pfd/visor-pdf.module').then((module) => module.VisorPdfModule),
        pathMatch:'full'
      },
      {
        path:'shopping-cart',
        loadChildren: () => import('src/app/modules/shopping-cart/shopping-cart.module').then((module) => module.ShoppingCartModule),
        pathMatch:'full'
      },
      {
        path:'slides-prueba',
        loadChildren: () => import('src/app/modules/slides-prueba/slides-prueba.module').then((module) => module.SlidesPruebaModule),
        pathMatch:'full'
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
