import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filmes } from '../models/filmes.model';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private listaFilmes!: any[];
  private url = 'http://localhost:3000/filmes';

  constructor(private httpClient: HttpClient) {
    this.listaFilmes = [];
  }

  get filmes(){
    return this.listaFilmes
  }

  PegarFilme(): Observable<Filmes[]>{
    return this.httpClient.get<Filmes[]>(`${this.url}`)
  }
}
