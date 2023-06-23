import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { DashLogadoComponent } from './dash-logado/dash-logado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { MeusFilmesComponent } from './meus-filmes/meus-filmes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdicioneFilmesComponent } from './adicione-filmes/adicione-filmes.component';
import { FormsModule } from '@angular/forms';
import { BuscaFilmesComponent } from './busca-filmes/busca-filmes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    DashLogadoComponent,
    EditarPerfilComponent,
    MeusFilmesComponent,
    HeaderComponent,
    FooterComponent,
    AdicioneFilmesComponent,
    BuscaFilmesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
