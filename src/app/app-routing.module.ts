import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './Components/book/book.component';
import { ChapterComponent } from './Components/chapter/chapter.component';
import { CharacterComponent } from './Components/character/character.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { MovieComponent } from './Components/movie/movie.component';




const routes: Routes = [
  {
  path: '',
  redirectTo: 'inicio',
  pathMatch: 'full'//si no tiene path es para el inicio, apenas se levanta el serve
}, 
{
  path: 'inicio',
  component: InicioComponent
}, 
{
  path: 'libros',
  component: BookComponent
},
{
  path: 'capitulos',
  component: ChapterComponent
}, 
{
  path: 'personajes',
  component: CharacterComponent
}, 
{
  path: 'peliculas',
  component: MovieComponent
}, 
{
  path: '**',
  redirectTo: 'inicio',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
