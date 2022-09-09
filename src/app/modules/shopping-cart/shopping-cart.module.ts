import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { IonicModule } from '@ionic/angular';
import { ShoppingCartComponent } from './views/shopping-cart.component';


@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    IonicModule,
  ]
})
export class ShoppingCartModule { }
