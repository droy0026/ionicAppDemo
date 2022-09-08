/* eslint-disable @typescript-eslint/quotes */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListadoService } from 'src/app/core/services/listado.service';
import { delay } from 'rxjs/internal/operators';
import { Pelicula } from 'src/app/core/models/pelicula';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  peliculas: Pelicula[] = [];
  //@Output() movieToCart = new EventEmitter<Pelicula>();

  //segment="first";

  constructor(private moviesService: ListadoService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.moviesService
      .fetchData()
      .pipe(delay(1000))
      .subscribe((data) => {
        console.log(data);
        this.peliculas = data;
      });
  }

 /*  addToCart(movie: Pelicula) {
    this.movieToCart.emit(movie);
    console.log(movie);
  } */

  deleteMovie(id: number) {
    const foundPelicula = this.peliculas.find(
      (_peliculas) => id === _peliculas.id
    );
    const peliculaIndex = this.peliculas.indexOf(foundPelicula);
    this.peliculas.splice(peliculaIndex, 1);

    // this.video.splice(this.video.indexOf(this.video.find( _videogame=> id === _videogame.id)));

    this.peliculas = [...this.peliculas];
  }
}
