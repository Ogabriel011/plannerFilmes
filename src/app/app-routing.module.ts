import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { DashLogadoComponent } from './dash-logado/dash-logado.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
