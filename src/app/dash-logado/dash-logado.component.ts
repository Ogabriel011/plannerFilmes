import { Component, OnInit } from '@angular/core';
import { FilmesLancamentos, FilmesRecomendados } from '../models/filmes.model';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-dash-logado',
  templateUrl: './dash-logado.component.html',
  styleUrls: ['./dash-logado.component.scss'],
})
export class DashLogadoComponent implements OnInit {
  filmes_recomendados!: FilmesRecomendados[];
  filmes_lancamentos!: FilmesLancamentos[];

  constructor(private filmesService: FilmesService) {}

  ngOnInit(): void {
    this.filmesService.PegarFilmesRecomendados().subscribe({
      next: (filmes: FilmesRecomendados[]) => {
        this.filmes_recomendados = filmes;
        console.log(filmes);
      },
      error: () => {
        console.log(Error);
      }
    });

    this.filmesService.PegarFilmesLancamentos().subscribe({
      next: (filmes: FilmesLancamentos[]) => {
        this.filmes_lancamentos= filmes;
        console.log(filmes);
      },
      error: () => {
        console.log('Erro');
      },
    });
  }
}
