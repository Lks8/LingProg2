import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { CursosComponent } from './cursos/cursos.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { AlunosComponent } from './alunos/alunos.component';


const routes: Routes = [{ path: "", component: CursosComponent },
{ path: "professores", component: ProfessoresComponent },
{path:"sugestoes", component: SugestoesComponent},
{path:"alunos", component: AlunosComponent},
{path:"**", redirectTo:"", pathMatch:"full"}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
