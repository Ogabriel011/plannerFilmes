import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { MeusFilmes } from '../models/filmes.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adicione-filmes',
  templateUrl: './adicione-filmes.component.html',
  styleUrls: ['./adicione-filmes.component.scss']
})
export class AdicioneFilmesComponent implements OnInit {

  meusFilmes: MeusFilmes[] = [];
  filtro: string = ''
  enteredSearchValue:string = '';
  anoFiltrado:string = '';
  generoFiltrado:string = '';
  tipoFiltrado:string = '';

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() filtroAno: EventEmitter<string> = new EventEmitter<string>();
  @Output() filtroGenero: EventEmitter<string> = new EventEmitter<string>();
  @Output() filtroTipo: EventEmitter<string> = new EventEmitter<string>();


  constructor(private filmesService: FilmesService, private formBuilder:FormBuilder){
  }

  ngOnInit(): void {
    this.listarFilmes();
  }

  listarFilmes(){
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

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

  anoFiltro(){
    this.filtroAno.emit(this.anoFiltrado);
    console.log(this.anoFiltrado);
  }

  generoFiltro(){
    this.filtroGenero.emit(this.generoFiltrado);
    console.log(this.generoFiltrado);
  }

  tipoFiltro(){
    this.filtroTipo.emit(this.tipoFiltrado);
    console.log(this.tipoFiltrado);
  }






}
