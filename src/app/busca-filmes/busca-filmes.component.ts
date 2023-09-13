import { Component, OnInit, Output } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { FormBuilder } from '@angular/forms';
import { MeusFilmes, RecomendaFilmes } from '../models/filmes.model';
import { Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'app-busca-filmes',
  templateUrl: './busca-filmes.component.html',
  styleUrls: ['./busca-filmes.component.scss']
})
export class BuscaFilmesComponent implements OnInit {

  recomendaFilmes: RecomendaFilmes[] = [];
  filtro:string = ''
  searchText:string = '';
  anoFiltro:string = '';
  generoFiltro:string = '';
  tipoFiltro:string = '';
  filme!: MeusFilmes

  testeObj:any;
  verificao!:boolean
  resultado!:any
  guardarId!:string

  @Output() filmeId!:string

  constructor(private filmesService: FilmesService, private router:Router, private sessionStorage: SessionStorageService){}

  ngOnInit(): void {
    this.verificaSession()
  }

  listarFilmesSession(){
    this.filmesService.GetRecomendaFilmes().subscribe({
      next: (filmes: RecomendaFilmes[]) => {
        this.recomendaFilmes = filmes;
        this.sessionStorage.set('filmesRecomendados', JSON.stringify(filmes))
      },
      error: () => {
        console.log(Error);
      }
    })
  }

  verificaSession(){
    if(window.sessionStorage.getItem('filmesRecomendados') === null){
      this.listarFilmesSession()
    }else{
      this.resultado = window.sessionStorage.getItem('filmesRecomendados')
      this.recomendaFilmes = JSON.parse(this.resultado)
      console.log(this.resultado)
    }
  }

  detalhesFilme(filmeId:string){
    this.filmeId = filmeId
    console.log(this.filmeId)
    window.sessionStorage.setItem('filmeId', filmeId)
    this.router.navigateByUrl('detalhes_filme');
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
}
