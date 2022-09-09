import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PageChangeEvent } from '@progress/kendo-angular-grid';
import { Pelicula } from 'src/app/core/models/pelicula';

@Component({
  selector: 'app-no-importantes',
  templateUrl: './no-importantes.component.html',
  styleUrls: ['./no-importantes.component.scss'],
})
export class NoImportantesComponent implements OnInit {
  @Input() articulos: number[];
  @Input() numero: number;
  @Output() emitAdd = new EventEmitter<number>();
  pageSize=5;
  skip =0;

  noImportants: Pelicula[]=[
    {id:1,nombre: '貞子3D',genero:'Horror',activo:false},
    {id:2,nombre: 'BloodRayne: Deliverance (BloodRayne II: Deliverance)', genero:'Action|Fantasy|Western', activo:true},
    {id:3,nombre: 'This Above All',genero:'Drama|Romance|War',activo:true},
    {id:4,nombre: 'Fast Life',genero:'Comedy|Romance',activo:true},
    {id:5,nombre: 'Daredevil',genero:'Action|Crime',activo:false},
    {id:6,nombre: 'Master of the House (Du skal ære din hustru) (Thou Shalt Honour Thy Wife)',genero:'Drama',activo:false},
    {id:7,nombre: 'Sister Kenny',genero:'Drama',activo:true},
    {id:8,nombre: 'Year of the Wolf, The (Suden vuosi)',genero:'Drama|Romance',activo:true},
    {id:9,nombre: 'Chicken, the Fish and the King Crab, The (El pollo, el pez y el cangrejo real)',genero:'Documentary',activo:false},
    {id:10,nombre: 'Rugrats Movie, The',genero:'Animation|Children|Comedy',activo:false},
    {id:11,nombre: 'Dummy',genero:'Comedy|Drama|Romance',activo:true},
    {id:12,nombre: 'Executive Target',genero:'Action|Adventure|Crime|Thriller',activo:true},
    {id:13,nombre: 'After School Special (a.k.a. Barely Legal)',genero:'Comedy',activo:true},
    {id:14,nombre: 'Metroland',genero:'Comedy|Drama',activo:false},
    {id:15,nombre: 'Dracula: Pages from a Virgin`s Diary',genero:'Horror|Mystery',activo:false},
    {id:16,nombre: 'The Crowded Sky',genero:'Action|Adventure|Drama',activo:true},
    {id:17,nombre: 'Just Like Heaven',genero:'Comedy|Fantasy|Romance',activo:true},
    {id:18,nombre: 'Paper, The',genero:'Comedy|Drama',activo:true},
    {id:19,nombre: 'Ordet (Word, The)',genero:'Drama',activo:true},
    {id:20,nombre: 'Interstellar',genero:'Sci-Fi|IMAX',activo:true},
    {id:21,nombre: 'Underworld: Rise of the Lycans',genero:'Action|Fantasy|Horror|Thriller',activo:false},
    {id:22,nombre: 'Small Town in Texas, A',genero:'Action|Adventure|Crime|Drama|Romance',activo:true},
    {id:23,nombre: 'Brothers McMullen, The',genero:'Comedy',activo:true},
    {id:24,nombre: 'Wetherby',genero:'Drama',activo:true},
    {id:25,nombre: 'Antarctica',genero:'Adventure|Drama',activo:false},
    {id:26,nombre: 'Hearts of Darkness: A Filmmakers Apocalypse',genero:'Documentary',activo:true},
    {id:27,nombre: 'Church, The (Chiesa, La)',genero:'Drama|Fantasy|Horror',activo:false},
    {id:28,nombre: 'Kira` Reason: A Love Story (En Kærlighedshistorie)',genero:'Drama',activo:true},
    {id:29,nombre: 'Ingenious',genero:'Comedy|Drama|Romance',activo:true},
    {id:30,nombre: 'After Death (Posle smerti)',genero:'Drama',activo:true},
    {id:31,nombre: 'Sharpe`s Sword',genero:'Action|Adventure|War',activo:true},
    {id:32,nombre: 'Casanova Brown',genero:'Comedy',activo:true},
    {id:33,nombre: 'Last Taboo, The',genero:'Documentary',activo:true},
    {id:34,nombre: 'Beaver, The',genero:'Drama',activo:true},
    {id:35,nombre: 'Albino Alligator',genero:'Crime|Thriller',activo:false},
    {id:36,nombre: 'Up',genero:'Adventure|Animation|Children|Drama',activo:true},
    {id:37,nombre: 'Moonraker',genero:'Action|Adventure|Sci-Fi|Thriller',activo:true},
    {id:38,nombre: 'Moonbase',genero:'Sci-Fi',activo:true},
    {id:39,nombre: 'Chelsea Girls',genero:'Drama',activo:true},
    {id:40,nombre: 'Apollo Zero',genero:'Documentary',activo:true}
  ];
  constructor(private toast: ToastController) { }

  ngOnInit() {
  }

  public onPageChange(state: PageChangeEvent): void {
    this.pageSize = state.take;
  }

  async addToCart(num: number){
    this.numero=num;
    this.emitAdd.emit(this.numero);
    const ts = await this.toast.create({
      message:'Elemento añadido a la cesta de la compra',
      duration:1500,
      position:'bottom'
    });
    await ts.present();

    console.log(num);
  }
}
