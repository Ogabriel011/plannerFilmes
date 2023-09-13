import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MeusFilmes, RecomendaFilmes } from '../models/filmes.model';
import { Router } from '@angular/router';
import { FilmesService } from '../services/filmes.service';



@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.scss']
})
export class DetalhesFilmeComponent implements OnInit {
  recomendaFilmes: RecomendaFilmes[] = [];
  filme!:MeusFilmes
  resultado!: any;
  guardarId!:any;
  exibeFilme!:MeusFilmes
  @Input() idFilme!:string

  constructor(private router: Router, private filmesService: FilmesService, private datePipe: DatePipe) {}


  ngOnInit(): void {
    this.recuperarSession()
    this.pegarId()
  }

  voltarTela() {
    this.router.navigateByUrl('busca_filmes');
  }

  recuperarSession() {
    this.resultado = window.sessionStorage.getItem('filmesRecomendados');
    this.recomendaFilmes = JSON.parse(this.resultado);
    console.log("identificador")
    console.log(this.recomendaFilmes)
    this.guardarFilme()
  }

  pegarId(){
    this.guardarId = window.sessionStorage.getItem('filmeId');
    return console.log(this.guardarId);
  }

  guardarFilme(){
    this.guardarId = window.sessionStorage.getItem('filmeId');
    this.recomendaFilmes.forEach( (element) => {
      if(element.id == this.guardarId){
        this.exibeFilme = element;
        console.log( "FILME EXIBIDO: " + this.exibeFilme.titulo  + this.exibeFilme.id)
      }
  });
  }

  onChangeAvaliacao(event:any){
    // console.log(event.target.value)
    window.sessionStorage.setItem("valueStar", event.target.value)
    let valueStar = window.sessionStorage.getItem("valueStar")
    console.log(valueStar)
  }

  onChangeData(event:any){
    let date = this.datePipe.transform(event.target.value, 'dd/MM/yyyy')
    // console.log("teste", date)
    window.sessionStorage.setItem("DateValue", JSON.stringify(date))
    let sessionDate = window.sessionStorage.getItem("DateValue")
    console.log(sessionDate)
  }
}


