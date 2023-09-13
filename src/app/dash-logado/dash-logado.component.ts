import { Component, OnInit } from '@angular/core';
import { FilmesLancamentos, FilmesRecomendados } from '../models/filmes.model';
import { FilmesService } from '../services/filmes.service';
import { LocalStorageService } from '../services/local-storage.service';
import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'app-dash-logado',
  templateUrl: './dash-logado.component.html',
  styleUrls: ['./dash-logado.component.scss'],
})
export class DashLogadoComponent implements OnInit {
  filmes_recomendados!: FilmesRecomendados[];
  filmes_lancamentos!: FilmesLancamentos[];
  testeObj:any

  constructor(
    private filmesService: FilmesService,
    private sessionStorage: SessionStorageService
  ) {}

  ngOnInit(): void {
    this.listaFilmesLancamento()
    this.listaFilmesRecomendados()
    this.testeSessionStorage()
  }

  listaFilmesLancamento() {
    this.filmesService.PegarFilmesLancamentos().subscribe({
      next: (filmes: FilmesLancamentos[]) => {
        this.filmes_lancamentos = filmes;
        console.log(filmes);
      },
      error: () => {
        console.log('Erro');
      },
    });
  }

  listaFilmesRecomendados(){
    this.filmesService.PegarFilmesRecomendados().subscribe({
      next: (filmes: FilmesRecomendados[]) => {
        this.filmes_recomendados = filmes;
        console.log(filmes);
      },
      error: () => {
        console.log(Error);
      },
    });
  }

  testeSessionStorage(){
    this.testeObj = this.sessionStorage.get(JSON.parse('dados'))
    console.log(this.testeObj)
  }
}
