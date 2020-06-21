import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessoresComponent } from './professores/professores.component';
import { CursosComponent } from './cursos/cursos.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { FormsModule } from '@angular/forms';
import { AddCursoComponent } from './add-curso/add-curso.component';
import { AlunosComponent } from './alunos/alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessoresComponent,
    CursosComponent,
    SugestoesComponent,
    AddCursoComponent,
    AlunosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
