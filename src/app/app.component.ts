import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @Input() articulos: number[];

  constructor() {}

  receiveNumber(num: number[]){
    this.articulos=num;
  }
}
