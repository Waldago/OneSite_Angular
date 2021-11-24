//angular core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//interno
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './Components/book/book.component';
import { MovieComponent } from './Components/movie/movie.component';
import { CharacterComponent } from './Components/character/character.component';
import { ChapterComponent } from './Components/chapter/chapter.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { HeaderComponent } from './Components/header/header.component';
//angular material
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { VideoyoutubeComponent } from './Components/videoyoutube/videoyoutube.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
//Declaro el componente para tenerlo disponible en toda la aplicacion
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MovieComponent,
    CharacterComponent,
    ChapterComponent,
    InicioComponent,
    HeaderComponent,
    VideoyoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
