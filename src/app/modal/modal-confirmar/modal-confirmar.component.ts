import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-confirmar',
  templateUrl: './modal-confirmar.component.html',
  styleUrls: ['./modal-confirmar.component.scss']
})
export class ModalConfirmarComponent {
  mostrar: boolean = false;

  toogle(){
    this.mostrar = !this.mostrar
  }
}
