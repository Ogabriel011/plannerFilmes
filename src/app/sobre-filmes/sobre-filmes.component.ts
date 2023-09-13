import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';
import { FilmesService } from '../services/filmes.service';
import { MeusFilmes } from '../models/filmes.model';

@Component({
  selector: 'app-sobre-filmes',
  templateUrl: './sobre-filmes.component.html',
  styleUrls: ['./sobre-filmes.component.scss'],
})
export class SobreFilmesComponent implements OnInit {

  meusFilmes: MeusFilmes[] = [];
  filme!:MeusFilmes
  resultado!: any;
  guardarId!:any;
  exibeFilme!:MeusFilmes
  @Input() idFilme!:string

  constructor(private router: Router, private filmesService: FilmesService) {}


  ngOnInit(): void {
    this.recuperarSession()
    this.pegarId()
  }

  voltarTela() {
    this.router.navigateByUrl('meus_filmes');
  }

  recuperarSession() {
    this.resultado = window.sessionStorage.getItem('dados');
    this.meusFilmes = JSON.parse(this.resultado);
    console.log("identificador")
    console.log(this.meusFilmes)
    this.guardarFilme()
  }

  pegarId(){
    this.guardarId = window.sessionStorage.getItem('idFilme');
    return console.log(this.guardarId);
  }

  guardarFilme(){
    this.guardarId = window.sessionStorage.getItem('idFilme');
    this.meusFilmes.forEach( (element) => {
      if(element.id == this.guardarId){
        this.exibeFilme = element;
        console.log( "FILME EXIBIDO: " + this.exibeFilme.titulo  + this.exibeFilme.id)
      }
  });
  }

  excluirFilme(timerProgressBar: boolean = true) {
    this.guardarId = window.sessionStorage.getItem('idFilme')
    let index = 0
    let oldFilmes = JSON.parse(JSON.stringify(this.meusFilmes))
    console.log(oldFilmes)
    this.meusFilmes.forEach( (element) => {
      if(element.id == this.guardarId){
        this.meusFilmes.splice(index, 1)
        console.log(this.meusFilmes)
        window.sessionStorage.setItem('dados', JSON.stringify(this.meusFilmes))
      }
      index+=1;
  });

    this.router.navigateByUrl('meus_filmes');
    Swal.fire({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      icon: 'success',
      timerProgressBar,
      timer: 3000,
      title: 'O filme foi excluido com sucesso!',
    });
  }
}
