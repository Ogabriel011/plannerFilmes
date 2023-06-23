import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from '../cadastro/minusculoValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario!:FormGroup;

  constructor(private fb:FormBuilder, private router:Router){

  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      usuario:['',[Validators.required, minusculoValidator]],
      senha:['',[Validators.required, Validators.minLength(6)]],
      termos:['',[Validators.required]]
    })
  }

  login(){
    if(this.formulario.valid){
      this.router.navigateByUrl('/dash')
      console.log(this.formulario.value)
    }else{
      return console.error("Formulario invalido");
    }
  }



}
