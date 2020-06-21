import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cor = true;
  title = 'Site do Lk';
  curso;
  mensagem="Tema escuro";
  gerarCor(){
    if(this.cor==false){
      this.cor=true;
      this.mensagem="Tema escuro";
    } else {
      this.cor=false;      
      this.mensagem="Tema claro";
    }
  }
}
