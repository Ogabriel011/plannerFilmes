import { Component, OnInit } from '@angular/core';
import { MeusFilmes } from '../models/filmes.model';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-meus-filmes',
  templateUrl: './meus-filmes.component.html',
  styleUrls: ['./meus-filmes.component.scss']
})
export class MeusFilmesComponent implements OnInit {

  meusFilmes: MeusFilmes[] = [];
  filtro:string = ''
  searchText:string = '';
  anoFiltro:string = '';
  generoFiltro:string = '';
  tipoFiltro:string = '';
  filme!: MeusFilmes


  constructor(private filmesService: FilmesService){}

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

  onSearchTextEndered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  filtrarAno(anoValue:string){
    this.anoFiltro = anoValue;
    console.log(this.anoFiltro)
  }

  filtrarGenero(generoValue:string){
    this.generoFiltro = generoValue.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(this.generoFiltro);
  }

  filtrarTipo(tipoValue:string){
    this.tipoFiltro = tipoValue;
    console.log(this.tipoFiltro)
  }

  validaGeneroSelecionado(generoInformado:string, generoRecebido:string){
    return generoInformado.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === generoRecebido.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  }

}
