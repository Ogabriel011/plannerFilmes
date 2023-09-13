import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-efetivar',
  templateUrl: './modal-efetivar.component.html',
  styleUrls: ['./modal-efetivar.component.scss']
})
export class ModalEfetivarComponent {
  mostrar: boolean = false;

  toogle(){
    this.mostrar = !this.mostrar
  }
}
