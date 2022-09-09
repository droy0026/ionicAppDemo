import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PageChangeEvent } from '@progress/kendo-angular-grid';
import { Pelicula } from 'src/app/core/models/pelicula';

@Component({
  selector: 'app-importantes',
  templateUrl: './importantes.component.html',
  styleUrls: ['./importantes.component.scss'],
})
export class ImportantesComponent implements OnInit {
  @Input() articulos: number[];
  @Input() numero= 1;
  @Output() emitAdd = new EventEmitter<number>();
  pageSize=5;
  skip =0;
  moviesImportants: Pelicula[];

  constructor(private toast: ToastController) { }

  ngOnInit() {
  }

  public onPageChange(state: PageChangeEvent): void {
    this.pageSize = state.take;
  }

  async addToCart(num: number){
    this.numero=num;
    this.emitAdd.emit(num);
    const ts = await this.toast.create({
      message:'Elemento añadido a la cesta de la compra',
      duration:1500,
      position:'bottom'
    });
    await ts.present();

    console.log(num);
  }

}
