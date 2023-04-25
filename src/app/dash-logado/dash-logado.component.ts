import { Component, OnInit } from '@angular/core';
import { Filmes } from '../models/filmes.model';

@Component({
  selector: 'app-dash-logado',
  templateUrl: './dash-logado.component.html',
  styleUrls: ['./dash-logado.component.scss']
})
export class DashLogadoComponent implements OnInit {

  filmes!: Filmes[]

  constructor(){}

  ngOnInit(): void {

  }

}
