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
}
