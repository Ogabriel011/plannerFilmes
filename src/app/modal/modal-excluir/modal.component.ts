import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  mostrar: boolean = false;

  toogle(){
    this.mostrar = !this.mostrar
  }
}
