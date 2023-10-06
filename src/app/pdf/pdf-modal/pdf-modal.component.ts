import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-pdf-modal',
  templateUrl: './pdf-modal.component.html',
  styleUrls: ['./pdf-modal.component.scss']
})
export class PdfModalComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.toogle()
    }, 2500);
  }

  mostrar: boolean = false;

  toogle(){
    this.mostrar = !this.mostrar
  }
}
