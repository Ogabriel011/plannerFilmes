import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmesLancamentos, FilmesRecomendados, MeusFilmes, RecomendaFilmes } from '../models/filmes.model';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private listaFilmes!: any[];
  private urlFilmesR = 'http://localhost:3000/filmes_recomendados';
  private urlFilmesL = 'http://localhost:3000/filmes_lancamentos';
  private urlMeusFilmes = 'http://localhost:3000/meus_filmes'
  private urlRecomendaFilmes = 'http://localhost:3000/recomenda_filmes'

  constructor(private httpClient: HttpClient) {
    this.listaFilmes = [];
  }

  get filmes(){
    return this.listaFilmes
  }

  PegarFilmesRecomendados(): Observable<FilmesRecomendados[]>{
    return this.httpClient.get<FilmesRecomendados[]>(`${this.urlFilmesR}`)
  }

  PegarFilmesLancamentos(): Observable<FilmesLancamentos[]>{
    return this.httpClient.get<FilmesLancamentos[]>(`${this.urlFilmesL}`)
  }

  PegarMeusFilmes():Observable<MeusFilmes[]>{
    return this.httpClient.get<MeusFilmes[]>(`${this.urlMeusFilmes}`)
  }

  GetRecomendaFilmes():Observable<RecomendaFilmes[]>{
    return this.httpClient.get<RecomendaFilmes[]>(`${this.urlRecomendaFilmes}`)
  }

  excluirFilmes(idFilme: any):Observable<any>{
    return this.httpClient.delete<any>(`${this.urlMeusFilmes}/${idFilme}`)
  }
}
