import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/filmes.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private listaUsuarios!: any[];
  private url = 'http://localhost:3000/usuarios'

  constructor(private httpClient: HttpClient){
    this.listaUsuarios = [];
  }

  get usuarios(){
    return this.listaUsuarios
  }

  mostrarUsuarios(): Observable<Usuarios[]>{
    return this.httpClient.get<Usuarios[]>(`${this.url}`)
  }


}
