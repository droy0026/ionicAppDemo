import { NgModule } from '@angular/core';
import { ListadoRoutingModule } from './listado-routing.module';
import { ListadoComponent } from './views/listado.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImportantesComponent } from './components/importantes/importantes.component';
import { NoImportantesComponent } from './components/no-importantes/no-importantes.component';


@NgModule({
  declarations: [ListadoComponent,ImportantesComponent,NoImportantesComponent],
  imports: [
    ListadoRoutingModule,
    IonicModule,
    GridModule,
    ButtonsModule,
    InputsModule,
    FormsModule,
    CommonModule,
    MatGridListModule,
  ]
})
export class ListadoModule { }
