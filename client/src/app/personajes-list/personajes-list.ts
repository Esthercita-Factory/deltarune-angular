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
  protected editandoId: number | null = null;

  constructor() {
    this.personajesService.getAll().subscribe((data) => {
      this.personajes.set(data);
    });
  }

  guardar() {
    if (this.editandoId === null) {
      this.personajesService
      .create({ nombre: this.nombre, rol: this.rol })
      .subscribe((nuevo) => {
        this.personajes.update((lista) => [...lista, nuevo]);
        this.limpiarFormulario();
      });
    } else {
      const id = this.editandoId;
      this.personajesService
      .update(id, { nombre: this.nombre, rol: this.rol })
      .subscribe(() => {
        this.personajes.update((lista) =>
        lista.map((p) => (p.id === id ? { id, nombre: this.nombre, rol: this.rol } : p))
      );
      this.limpiarFormulario();
      })
    }
  }

  editar(personaje: Personaje) {
    this.editandoId = personaje.id;
    this.nombre = personaje.nombre;
    this.rol = personaje.rol
  }

  cancelarEdicion() {
    this.limpiarFormulario();
  }

  eliminarPersonaje(id: number) {
    this.personajesService.delete(id).subscribe(() => {
      this.personajes.update((lista) => lista.filter((p) => p.id !== id));
    });
  }

  private limpiarFormulario() {
    this.nombre = '';
    this.rol = '';
    this.editandoId = null;
  }
}
