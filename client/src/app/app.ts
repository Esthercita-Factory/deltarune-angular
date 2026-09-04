import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonajesList } from './personajes-list/personajes-list';

@Component({
  imports: [RouterOutlet, PersonajesList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('client');
}
