import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { CursosComponent } from '../cursos/cursos.component';
import { resetFakeAsyncZone } from '@angular/core/testing';



@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.scss']
})
export class AddCursoComponent implements OnInit {
  @Input() curso;
  @Output() adiciona = new EventEmitter;
  @ViewChild("nomeInput") nome:ElementRef;
  @ViewChild("descricaoInput") descricao:ElementRef;
  @ViewChild("imagemInput") imagem:ElementRef;
  @ViewChild("legendaInput") legenda:ElementRef;
  // @Input() curso;
  // @Input() curso;
  constructor() { }

  ngOnInit(): void {
  }

  cursos = [
    { nome: "", descricao: "", imagem: "", legenda: "" }
  ];

  add(nomeInput,descricaoInput,imagemInput,legendaInput){
    if (nomeInput != "" && descricaoInput != "" && imagemInput != "" && legendaInput != ""){
      this.adiciona.emit({nomeInput,descricaoInput,imagemInput,legendaInput});
      this.nome.nativeElement.value="";
      this.imagem.nativeElement.value="";
      this.descricao.nativeElement.value="";
      this.legenda.nativeElement.value="";
    }else
      alert("Preencha todos os campos antes de adicionar um curso!");
  }

}
