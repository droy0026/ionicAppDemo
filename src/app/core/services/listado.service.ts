import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Pelicula } from '../models/pelicula';
import { delay } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class ListadoService {
  data: Pelicula[]=[];
  result = 0;

  resultSubject = new BehaviorSubject(0);

  constructor() {
    this.initialData();
  }

  initialData(){
    this.data=[
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
      {id:40,nombre: 'Apollo Zero',genero:'Documentary',activo:true},
      {id:41,nombre: 'Blood & Donuts',genero:'Comedy|Horror',activo:true},
      {id:42,nombre: 'Last Hurrah for Chivalry (Hao xia)',genero:'Action|Drama',activo:false},
      {id:43,nombre: 'Downstairs',genero:'Drama',activo:true},
      {id:44,nombre: 'Broadway Danny Rose',genero:'Comedy',activo:false},
      {id:45,nombre: 'Torpedo Run',genero:'Drama|War',activo:false},
      {id:46,nombre: 'Save the Date',genero:'Comedy|Romance',activo:false},
      {id:47,nombre: 'Mirror, The (Zerkalo)',genero:'Drama',activo:false},
      {id:48,nombre: 'Velvet Vampire, The',genero:'Fantasy|Horror',activo:true},
      {id:49,nombre: 'The Italian Connection',genero:'Crime|Drama',activo:false},
      {id:50,nombre: 'Out of Mind: The Stories of H.P. Lovecraft',genero:'Fantasy|Horror',activo:true},
      {id:51,nombre: 'Goal! III',genero:'Drama|Romance',activo:true},
      {id:52,nombre: 'Wild Child, The (Enfant sauvage, L',genero:'Drama',activo:true},
      {id:53,nombre: 'Messages Deleted',genero:'Mystery|Thriller',activo:false},
      {id:54,nombre: 'Young Törless, The (Junge Törless, Der)',genero:'Drama',activo:false},
      {id:55,nombre: 'Control Room',genero:'Documentary|War',activo:true},
      {id:56,nombre: 'Inbetweeners 2, The',genero:'Comedy',activo:true},
      {id:57,nombre: 'Easy Virtue',genero:'Comedy|Romance',activo:true},
      {id:58,nombre: 'Before I Disappear',genero:'Drama',activo:false},
      {id:59,nombre: 'Divorce American Style',genero:'Comedy',activo:true},
      {id:60,nombre: 'Bait',genero:'Action|Comedy',activo:true},
      {id:61,nombre: 'Swept Away',genero:'Comedy|Romance',activo:false},
      {id:62,nombre: 'Transylvania 6-5000',genero:'Comedy|Horror',activo:false},
      {id:63,nombre: 'H6: Diario de un asesino',genero:'Horror|Thriller',activo:true},
      {id:64,nombre: 'Frankenstein Syndrome, The',genero:'Horror|Sci-Fi',activo:false},
      {id:65,nombre: 'Jonah: A VeggieTales Movie',genero:'Animation|Children|Musical',activo:false},
      {id:66,nombre: 'Hello! How Are You? (Buna! Ce faci?)',genero:'Comedy|Romance',activo:false},
      {id:67,nombre: 'Late George Apley, The',genero:'Comedy',activo:true},
      {id:68,nombre: 'Maze',genero:'Romance',activo:true},
      {id:69,nombre: 'Bad Sleep Well, The (Warui yatsu hodo yoku nemuru)',genero:'Drama|Thriller',activo:true},
      {id:70,nombre: 'Bellboy, The',genero:'Comedy',activo:false},
      {id:71,nombre: 'Superman II',genero:'Action|Sci-Fi',activo:true},
      {id:72,nombre: 'Very British Gangster, A',genero:'Crime|Documentary',activo:true},
      {id:73,nombre: 'Murder Ahoy',genero:'Comedy|Crime|Drama|Mystery',activo:false},
      {id:74,nombre: 'All About Steve',genero:'Comedy',activo:true},
      {id:75,nombre: 'Patti Smith: Dream of Life',genero:'Documentary',activo:true},
      {id:76,nombre: 'Sin City',genero:'Action|Crime|Film-Noir|Mystery|Thriller',activo:true},
      {id:77,nombre: 'Beyond the Lights',genero:'Drama',activo:true},
      {id:78,nombre: 'Ill Be There',genero:'Comedy|Musical|Romance',activo:false},
      {id:79,nombre: 'How to Cook Your Life',genero:'Documentary',activo:false},
      {id:80,nombre: 'Working Class Goes to Heaven',genero:'Drama',activo:false}
    ];

  }

  fetchData(){
    return of(this.data);
  }

  getData() {
    this.fetchData().pipe(
      delay(1000)
    ).subscribe((data)=> {
      console.log(data);
    });
  }

  removeData(id: number){
    this.data =this.data.filter(item => item.id !== id);
  }

  updateResult(result: number) {
    this.resultSubject.next(result);
  }

  resultRefresh(){

    return this.resultSubject;
  }

}

