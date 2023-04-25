import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {



  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
  }

  public form = new FormGroup({
    email: new FormControl ('', [Validators.required,Validators.email]),
    usuario: new FormControl ('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    senha: new FormControl ('', [Validators.required, Validators.minLength(4)])
  })

  OnSubmit(){
    console.log(this.form.value)
  }

}
