import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/Services/Movie/movie.service';
import { pelicula } from 'src/app/Models/pelicula';

@Component({
  selector: 'app-movie',//etiqueta que se generara en el html o directiva
  templateUrl: './movie.component.html',//template html
  styleUrls: ['./movie.component.css']//template css
})

export class MovieComponent implements OnInit {

  @Output()
  Movie : Observable <any>

  peliculas !: pelicula[];

  
  dir : string[] = [
    "OsU-vkp1fOE",
    "2Pvm3cltimk",
    "SDnYMbYB-nU",
    "OPVWy1tFXuc",
    "ZSzeFFsKEt4",
    "yZLxtW7qq48",
    "V75dMMIW2B4",
    "mZYms2vsm2Y",
  ];

  constructor(public m : MovieService) {
    this.Movie = this.m.getAllMovie()
   }

  ngOnInit(): void {
    this.m.getAllMovie().subscribe(Response =>{
      this.peliculas = Response.docs
      /*this.peliculas.forEach(pelicula => 
        console.log(pelicula)
        )*/
      console.log(Response)
    }, error=>{
      console.error(error)
    })
  }
}
