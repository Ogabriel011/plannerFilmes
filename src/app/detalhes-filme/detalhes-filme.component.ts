import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MeusFilmes, RecomendaFilmes } from '../models/filmes.model';
import { Router } from '@angular/router';
import { FilmesService } from '../services/filmes.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonpInterceptor } from '@angular/common/http';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.scss'],
})
export class DetalhesFilmeComponent implements OnInit {

  recomendaFilmes: RecomendaFilmes[] = [];
  filme!: MeusFilmes;
  resultado!: any;
  guardarId!: any;
  exibeFilme!: MeusFilmes;
  @Input() idFilme!: string;
  descricaoFilme:string = '';
  formulario!:FormGroup;
  formSelect!:FormGroup;
  formStars!:FormGroup;
  valueStar!:any;
  valueCheckbox!:any;
  localDate!:any;
  valueMensagem!:any;
  isJaAssistiu:boolean = false;
  isFavoritos:boolean = false;
  isQueroAssistir:boolean = false;

  constructor(
    private router: Router,
    private filmesService: FilmesService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formularioValidator();
    this.recuperarSession();
    this.pegarId();
  }

  formularioValidator(){
    this.formulario = this.formBuilder.group({
      date:['', [Validators.required]],
      textArea: ['',[Validators.required]],
      selected:['', [Validators.required]]
    })

  }


  voltarTela() {
    this.router.navigateByUrl('busca_filmes');
  }

  recuperarSession() {
    this.resultado = window.sessionStorage.getItem('filmesRecomendados');
    this.recomendaFilmes = JSON.parse(this.resultado);
    console.log('identificador');
    console.log(this.recomendaFilmes);
    this.guardarFilme();
  }

  pegarId() {
    this.guardarId = window.sessionStorage.getItem('filmeId');
    return console.log(this.guardarId);
  }

  guardarFilme() {
    this.guardarId = window.sessionStorage.getItem('filmeId');
    this.recomendaFilmes.forEach((element) => {
      if (element.id == this.guardarId) {
        this.exibeFilme = element;
        console.log(
          'FILME EXIBIDO: ' + this.exibeFilme.titulo + this.exibeFilme.id
        );
      }
    });
  }

  onChangeAvaliacao(event: any) {
    window.localStorage.setItem('valueStar', event.target.value);
  }

  onChangeCheckbox(event:any){
    window.localStorage.setItem('ValueCheckbox', event.target.checked)
    console.log(event.target.checked)

    if(event.target.checked = true){
      this.isJaAssistiu = true

    }else{
      this.isJaAssistiu = false
      
    }


  }


  onChangeData(event: any) {
    let date = this.datePipe.transform(event.target.value, 'dd/MM/yyyy');
    window.localStorage.setItem('DateValue', JSON.stringify(date));

  }

  onChangeMensagem(event:any){
    window.localStorage.setItem('valueMensagem', event.target.value);
  }

  goPdf(){
    this.router.navigateByUrl('/pdf')
  }

  redirectWhats(){
    window.location.href = 'https://web.whatsapp.com/'
  }

  redirectFace(){
    window.location.href = 'https://www.facebook.com/?locale=pt_BR'
  }

  salvarInformacoes(){
    this.valueCheckbox = window.localStorage.getItem("valueCheckbox");
    this.localDate = window.localStorage.getItem("DateValue");
    this.valueMensagem = window.localStorage.getItem("valueMensagem");
    this.valueStar = window.localStorage.getItem("valueStar");
    console.log([this.valueCheckbox, this.localDate, this.valueMensagem, this.valueStar])
  }

  limparFormulario(){
    this.formulario.reset()
  }

}
