import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Pelicula } from '../models/pelicula';
import { delay } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class ListadoService {
  result = 0;

  resultSubject = new BehaviorSubject(0);
  constructor() { }

  updateResult(result: number) {
    this.resultSubject.next(result);
  }

  resultRefresh() {

    return this.resultSubject;

  }

}

