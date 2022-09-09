import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<boolean> {
  movies: Pelicula[] = [
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

  constructor(private router: Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>  {

    const id = route.params[id];

    const movie = this.movies.find((movies)=>movie.id === Number(id));
    console.log(movie);
    console.log(id);
    if(movie){

      return of(movie);

    }

    this.router.navigate(['']);

    return of({});
  }


}
