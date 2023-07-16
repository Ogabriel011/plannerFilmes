import { Component, OnInit } from '@angular/core';
import { MeusFilmes } from '../models/filmes.model';
import { FilmesService } from '../services/filmes.service';
import { Router } from '@angular/router';

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


  constructor(private filmesService: FilmesService, private router:Router){}

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

    // Selecione um Gênero
    if(generoInformado.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === "selecione um genero"){
      return true
    }
    else{
      return generoInformado.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === generoRecebido.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    }


  }

  validaAno(anoInformado:string, anoRecebido:string){
    if(anoInformado.toLowerCase() === "selecione um ano"){
      return true
    }
    else{
      return anoInformado.toLowerCase() === anoRecebido.toLowerCase()
    }
  }

  validaTipo(tipoInformado:string, tipoRecebido:string){
    if(tipoInformado.toLowerCase() === "selecione um tipo"){
      return true
    }
    else{
      return tipoInformado.toLowerCase() === tipoRecebido.toLowerCase()
    }
  }

  detalhesFilme(){
    this.router.navigateByUrl('sobre_filmes')
  }

}
