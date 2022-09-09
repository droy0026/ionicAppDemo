import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListadoModule } from '../listado/listado.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './views/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    LayoutRoutingModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ListadoModule
  ]
})
export class LayoutModule { }
