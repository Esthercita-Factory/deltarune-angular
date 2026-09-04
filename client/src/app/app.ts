import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Personajes, Personaje } from './personajes';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private personajesService = inject(Personajes);
  protected readonly personajes = signal<Personaje[]>([]);

  constructor() {
    this.personajesService.getAll().subscribe((data) => {
      this.personajes.set(data);
    })
  }
}
