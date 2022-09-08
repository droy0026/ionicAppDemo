import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisorPdfRoutingModule } from './visor-pdf-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { VisorPdfComponent } from './views/visor-pdf.component';

@NgModule({
  declarations: [VisorPdfComponent],
  imports: [
    CommonModule,
    VisorPdfRoutingModule,
    IonicModule,
    NgxDocViewerModule,
  ],
})
export class VisorPdfModule {}
