/* eslint-disable @typescript-eslint/quotes */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListadoService } from 'src/app/core/services/listado.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  numArticulos: number[];
  initialArticles=0;
  segment='first';

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Output() emitArticle = new EventEmitter<number[]>();


  constructor(private moviesService: ListadoService) {}

  ngOnInit(): void {}

  receiveNumber(num: number){
    this.initialArticles=num;

  }

  addToCart(){
    this.initialArticles++;
    this.moviesService.updateResult(this.initialArticles);
    this.emitArticle.emit(this.numArticulos);
    console.log(this.numArticulos);
  }

  /* deleteMovie(id: number) {
    const foundPelicula = this.peliculas.find(
      (_peliculas) => id === _peliculas.id
    );
    const peliculaIndex = this.peliculas.indexOf(foundPelicula);
    this.peliculas.splice(peliculaIndex, 1);

    // this.video.splice(this.video.indexOf(this.video.find( _videogame=> id === _videogame.id)));

    this.peliculas = [...this.peliculas];
  } */
}
