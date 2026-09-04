import { Component, inject, signal } from '@angular/core';
import { Personajes, Personaje } from '../personajes';

@Component({
  imports: [],
  selector: 'app-personajes-list',
  styleUrl: './personajes-list.css',
  templateUrl: './personajes-list.html',
})
export class PersonajesList {
  private personajesService = inject(Personajes);
  protected readonly personajes = signal<Personaje[]>([]);

  constructor() {
    this.personajesService.getAll().subscribe((data) => {
      this.personajes.set(data);
    });
  }
}
