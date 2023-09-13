import { Injectable } from '@angular/core';
import { MeusFilmes } from '../models/filmes.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage

  constructor() {this.storage = window.localStorage }

  set(key: string, value: string) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key: string){
    return this.storage.getItem(key);
  }
}

// Chamar local-storage na pagina de meus filmes quando for acessada pela primeira vez, fazendo com que a lista dos meus filmes já fiquei pré carregada, dessa forma consigo acessar as informações que foram carregadas atraves de outro componente

