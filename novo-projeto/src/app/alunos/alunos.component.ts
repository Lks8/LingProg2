import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Pessoa } from '../model/pessoa';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();

  pessoas: Array<Pessoa> = [];

  ngOnInit(): void { }

  curso = ['Administração', 'Design', 'Engenharia'];
  //pessoas = [{nomeInput:"Lucas",idadeInput:"22",emailInput:"lks8@hotmail.com",cursoInput:"Engenharia"}];

  
  salvar(pessoaForm) {
    
    this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.idade = pessoaForm.value.idade;
    this.pessoa.email = pessoaForm.value.email;
    this.pessoa.curso = pessoaForm.value.curso;
  
    this.add(this.pessoa);
    
  }
  

  add(pessoa){
    
    this.pessoas.push(pessoa);
    this.pessoa = new Pessoa();
  }

}
