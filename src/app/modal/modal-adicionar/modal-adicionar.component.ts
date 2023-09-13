import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-adicionar',
  templateUrl: './modal-adicionar.component.html',
  styleUrls: ['./modal-adicionar.component.scss']
})
export class ModalAdicionarComponent {
  mostrar: boolean = false;

  toogle(){
    this.mostrar = !this.mostrar
  }

  onChangeData(event:any){
    console.log("teste", event)
  }
}
