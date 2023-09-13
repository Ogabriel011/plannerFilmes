import { Injectable } from '@angular/core';
import { MeusFilmes } from '../models/filmes.model';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  sessionStorage: Storage
  // listaFilmes: MeusFilmes[] = []

  constructor() { this.sessionStorage = window.sessionStorage }

  set(key:string, value:string){
    this.sessionStorage.setItem(key, value)
  }

  get(key:string){
    this.sessionStorage.getItem(key)
  }

  // set(key: string, value: string ) {
  //   if (typeof value === 'object') value = JSON.stringify(value);
  //   sessionStorage.setItem(key, value);
  // }

  // get(key: string) {
  //   const value = sessionStorage.getItem(key);
  //   try {
  //     return JSON.parse(value);
  //   } catch (e) {
  //     return value;
  //   }
  // }
}
