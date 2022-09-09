import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListadoService } from 'src/app/core/services/listado.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Input() articulos: number[];

  operationResult = 0;
  subscription: Subscription;

  constructor(private listadoService: ListadoService) {}

  ngOnInit() {
    this.subscription = this.listadoService
      .resultRefresh()
      .subscribe((data) => (this.operationResult = data));
  }

  receiveArticle(num: number[]) {
    this.articulos= num;
  }
}
