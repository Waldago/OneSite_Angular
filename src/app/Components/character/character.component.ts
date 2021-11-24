import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/Services/Character/character.service';
import { personaje } from 'src/app/Models/personaje';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  @Output()
  Character: Observable<any>;

  Personajes!: personaje[];

  nombre = new FormControl('');

  personaje!: personaje;

  constructor(public cs: CharacterService) {
    this.Character = this.cs.getAllCharacter();
  }

  ngOnInit(): void {
    this.cs.getAllCharacter().subscribe(
      (Response) => {
        this.Personajes = Response.docs;
        console.log(this.Personajes);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getNombre(event: Event) {
    event.preventDefault();
    console.log(this.nombre.value);
    this.setValueNombre();
    console.log(this.personaje);
  }

  setValueNombre() {
    this.Personajes.forEach((data) => {
      if (data.name.includes(this.nombre.value)) {
        this.personaje = data;
      }
    });
  }

  resetNombre(event: Event) {
    this.personaje.death = '';
    this.personaje.gender = '';
    this.personaje.name = '';
    this.personaje.race = '';
    this.personaje.spouse = '';
    this.personaje.wikiUrl = '';
  }
}
