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
import { DetalhesFilmeComponent } from './detalhes-filme/detalhes-filme.component';
import { SobreFilmesComponent } from './sobre-filmes/sobre-filmes.component';
import { ModalComponent } from './modal/modal-excluir/modal.component';
import { ModalConfirmarComponent } from './modal/modal-confirmar/modal-confirmar.component';
import { ModalEfetivarComponent } from './modal/modal-efetivar/modal-efetivar.component';
import { ModalAdicionarComponent } from './modal/modal-adicionar/modal-adicionar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';



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
    DetalhesFilmeComponent,
    SobreFilmesComponent,
    ModalComponent,
    ModalConfirmarComponent,
    ModalEfetivarComponent,
    ModalAdicionarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    DatePipe
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
