import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculoValidator';
import { Usuarios } from '../models/filmes.model';
import { UsuariosService } from '../services/usuarios.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario!: FormGroup
  usuarios!: Usuarios[];

  constructor(private fb:FormBuilder, private router:Router, private usuariosService:UsuariosService){}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      usuario:['',[Validators.required, minusculoValidator]],
      senha:['',[Validators.required, Validators.minLength(6)]],
      termos:['',[Validators.required]]
    });

    this.usuariosService.mostrarUsuarios().subscribe({
      next: (usuarios: Usuarios[]) => {
        this.usuarios = usuarios;
        console.log(usuarios)
      },
      error: () => {
        console.log(Error)
      }
    })
  }

  cadastro(){
    if(this.formulario.valid){
      this.router.navigateByUrl('/dash')
      console.log(this.formulario.value)
    }else{
      return console.error("Formulario invalido");
    }
  }




}
