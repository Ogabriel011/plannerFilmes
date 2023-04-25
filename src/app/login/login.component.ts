import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!:FormGroup;
  formularioDeUsuario: any;


  constructor(private fb:FormBuilder, private router:Router){

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      usuario: new FormControl ('',Validators.required),
      senha: new FormControl ('',[Validators.required, Validators.minLength(4)])
    })
  }

  OnSubmit(){
    console.log(this.form.value)
  }


}
