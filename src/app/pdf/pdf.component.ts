import { AfterViewInit, Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PdfModalComponent } from './pdf-modal/pdf-modal.component';
import { MeusFilmes, RecomendaFilmes } from '../models/filmes.model';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements AfterViewInit{

  modal!:PdfModalComponent;
  guardarId!: any;
  recomendaFilmes: RecomendaFilmes[] = [];
  resultado!: any;
  exibeFilme!: MeusFilmes;
  valueStar!:any;
  valueCheckbox!:any;
  localDate!:any;
  valueMensagem!:any;
  isFavoritos:boolean = false

  constructor(private router: Router,){}


  // NgAfterViewInit
  ngAfterViewInit(): void {
    this.recuperarSession();
    this.pegarId();
    this.guardarInformacoes();
    this.pegarValorCheckbox();
    // this.timeout()
  }

  gerarPDF() {
    let data = document.getElementById('contentToConvert')!;
    html2canvas(data).then(canvas => {
      var imgWidth = 300;
      var pageWidth = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataUrl = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p' , 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataUrl, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MyPdf.pdf');
    });
  };


  timeout(){
    setTimeout(() => {
      this.gerarPDF()
    }, 1000);
  }

  recuperarSession() {
    this.resultado = window.sessionStorage.getItem('filmesRecomendados');
    this.recomendaFilmes = JSON.parse(this.resultado);
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
          `Filme Exibido: ${this.exibeFilme.titulo} ${this.exibeFilme.id}`
        );
      }
    });
  }

  guardarInformacoes(){
    this.valueCheckbox = window.localStorage.getItem("valueCheckbox");
    this.localDate = window.localStorage.getItem("DateValue");
    this.valueMensagem = window.localStorage.getItem("valueMensagem");
    this.valueStar = window.localStorage.getItem("valueStar");
    console.log([this.valueCheckbox, this.localDate, this.valueMensagem, this.valueStar])
  }

  pegarValorCheckbox(){
    if(this.valueCheckbox = true){
      this.isFavoritos = true
    }else{
      this.isFavoritos = false
    }
  }

  clearLocalStorage(){
    window.localStorage.clear()
  }

}
