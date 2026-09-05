import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Personaje {
    id: number;
    nombre: string;
    rol: string;
}

@Service()
export class Personajes {
    private http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:5251/api/personajes';

    getAll(): Observable<Personaje[]> {
        return this.http.get<Personaje[]>(this.apiUrl);
    }

    create(nuevoPersonaje: Omit<Personaje, 'id'>): Observable<Personaje>{
        return this.http.post<Personaje>(this.apiUrl, nuevoPersonaje);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    update(id: number, personajeActualizado: Omit<Personaje, 'id'>): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, personajeActualizado);
    }
}
