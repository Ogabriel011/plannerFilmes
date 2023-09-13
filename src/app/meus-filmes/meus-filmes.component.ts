import { MeusFilmes } from './../models/filmes.model';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { SessionStorageService } from '../services/session-storage.service';

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
    this.filmesService.PegarMeusFilmes().subscribe({
      next: (filmes: MeusFilmes[]) => {
        this.meusFilmes = filmes
        this.sessionStorage.set('dados', JSON.stringify(filmes))
      },
      error: () => {
        console.log(Error);
      }
    })
  }

  verificaSession(){
    if(window.sessionStorage.getItem('dados') === null){
      this.listarFilmesSession()
    }else{
      this.resultado = window.sessionStorage.getItem('dados')
      this.meusFilmes = JSON.parse(this.resultado)
      console.log(this.resultado)
    }
  }

  detalhesFilme(idFilme:string){
    this.filmeId = idFilme
    console.log(this.filmeId)
    window.sessionStorage.setItem('idFilme', idFilme)
    this.router.navigateByUrl('sobre_filmes');
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
