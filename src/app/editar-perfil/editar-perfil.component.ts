import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { minusculoValidator } from '../cadastro/minusculoValidator';
import { Usuarios } from '../models/filmes.model';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit{

  formulario!: FormGroup
  usuarios!: Usuarios[];
  url:any = '../../assets/img/images 1.png';
  msg = ''

  constructor(private fb: FormBuilder, private usuariosService: UsuariosService){}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })

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

  Salvar(){
    console.log(this.formulario.value)
  }

  trocarImagem(event: any){
    if(!event.target.files[0] || event.target.files[0].length == 0){
      this.msg = '*Selecione uma imagem';
      return;
    }

    var mimeType = event.target.files[0].type;

    if(mimeType.match(/image\/*/)==null){
      this.msg = '*Apenas imagens são suportadas';
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result
    }
  }

}


