import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personajes, Personaje } from '../personajes';

@Component({
  imports: [FormsModule],
  selector: 'app-personajes-list',
  styleUrl: './personajes-list.css',
  templateUrl: './personajes-list.html',
})
export class PersonajesList {
  private personajesService = inject(Personajes);
  protected readonly personajes = signal<Personaje[]>([]);

  protected nombre = '';
  protected rol = '';

  constructor() {
    this.personajesService.getAll().subscribe((data) => {
      this.personajes.set(data);
    });
  }

  agregarPersonaje() {
    this.personajesService
    .create({ nombre: this.nombre, rol: this.rol })
    .subscribe((nuevo) => {
      this.personajes.update((lista) => [...lista, nuevo]);
      this.nombre = '';
      this.rol = '';
    });
  }
}
