import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/model/thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})


export class ThoughtComponent implements OnInit {

  @Input() pensamento : Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.pensamento);
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }


}
