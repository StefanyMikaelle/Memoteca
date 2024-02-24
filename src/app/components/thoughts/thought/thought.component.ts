import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/model/thought';
import { ThoughtService } from 'src/app/services/thought/thoughtHttp.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})


export class ThoughtComponent implements OnInit {

  @Input() pensamento : Pensamento = {
    conteudo: 'dsfdsf',
    autoria: 'fdsgds',
    modelo: 'modelo3',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private service : ThoughtService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(){
    if(!this.pensamento.favorito){
      return 'inativo'
    }
    return 'ativo'
  }

  atualizarFavoritos(){
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento),1)
    });
  }

}
