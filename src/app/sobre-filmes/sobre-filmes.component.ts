import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-sobre-filmes',
  templateUrl: './sobre-filmes.component.html',
  styleUrls: ['./sobre-filmes.component.scss']
})
export class SobreFilmesComponent implements OnInit{

  constructor(private router: Router){

  }

  ngOnInit(): void {}

  voltarTela(){
    this.router.navigateByUrl('meus_filmes');
  }

  excluirFilme(){
    this.router.navigateByUrl('meus_filmes')
    alert('O filme foi excluido com sucesso!')
  }

  cancelarExcluir(){
    alert('O filme não foi excluido!')
    
  }

}
