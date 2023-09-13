import { ModalConfirmarComponent } from './modal/modal-confirmar/modal-confirmar.component';
import { ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { DashLogadoComponent } from './dash-logado/dash-logado.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { MeusFilmesComponent } from './meus-filmes/meus-filmes.component';
import { BuscaFilmesComponent } from './busca-filmes/busca-filmes.component';
import { DetalhesFilmeComponent } from './detalhes-filme/detalhes-filme.component';
import { SobreFilmesComponent } from './sobre-filmes/sobre-filmes.component';
import { ModalComponent } from './modal/modal-excluir/modal.component';

const routes: Routes = [
  {
  path: '', redirectTo:'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'cadastro', component:CadastroComponent
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'dash', component:DashLogadoComponent
  },
  {
    path: 'editar_perfil', component:EditarPerfilComponent
  },
  {
    path: 'meus_filmes', component:MeusFilmesComponent
  },
  {
    path: 'busca_filmes', component:BuscaFilmesComponent
  },
  {
    path: 'detalhes_filme', component: DetalhesFilmeComponent
  },
  {
    path: 'sobre_filmes', component: SobreFilmesComponent
  },
  {
    path: 'modal', component: ModalComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
