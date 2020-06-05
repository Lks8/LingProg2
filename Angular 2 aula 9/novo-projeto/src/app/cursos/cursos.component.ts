import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cursos = [
    { nome: "", descricao: "", imagem: "", legenda: "" }
  ];

  adicionar(curso) {
    
      this.cursos = [curso, ...this.cursos];
    
  }
}
