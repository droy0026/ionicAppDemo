/* eslint-disable @typescript-eslint/quotes */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/core/models/pelicula';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  @Input() movies: Pelicula[];
  @Output() emitRomove = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  removeFromFav(id: number){
    this.emitRomove.emit(id);
  }

}


