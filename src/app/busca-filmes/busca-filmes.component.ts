import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { FormBuilder } from '@angular/forms';
import { MeusFilmes } from '../models/filmes.model';

@Component({
  selector: 'app-busca-filmes',
  templateUrl: './busca-filmes.component.html',
  styleUrls: ['./busca-filmes.component.scss']
})
export class BuscaFilmesComponent implements OnInit {

  meusFilmes: MeusFilmes[] = [];
  filtro: string = ''

  constructor(private filmesService: FilmesService, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.filmesService.PegarMeusFilmes(this.filtro).subscribe({
      next: (filmes: MeusFilmes[]) => {
        this.meusFilmes = filmes;
        console.log(filmes)
      },
      error: () => {
        console.log(Error);
      }
    })
  }

}
