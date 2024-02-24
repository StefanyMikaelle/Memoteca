import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../../model/thought';
import { ThoughtService } from '../../services/thought/thoughtHttp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
})
export class ListThoughtComponent implements OnInit {
  listaPensamentos : Pensamento [] = [];
  paginaAtual: number = 1;
  haMaisPensamentos : boolean = true;
  filtro: string = '';
  favorito : boolean = false;
  listaFavoritos : Pensamento [] = [];
  titulo: string = 'Meu Mural';

  constructor(
    private service : ThoughtService,
    private router : Router
    ) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro, this.favorito).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1 ;
    this.service.listar(this.paginaAtual, this.filtro, this.favorito)
    .subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos
    })
  }

  recarregarComponente(){
    //*Não é bom dessa forma pois recarrega toda página
    //location.reload();
    this.favorito = false;
    this.paginaAtual = 1;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url])
  }

  listarFavoritos(){
    this.titulo = 'Meus Favoritos';
    this.haMaisPensamentos = true;
    this.paginaAtual = 1
    this.favorito = true;
    this.service.listar(this.paginaAtual, this.filtro , this.favorito)
      .subscribe(listaPensamentoFavorito => {
        this.listaPensamentos = listaPensamentoFavorito;
        this.listaFavoritos = listaPensamentoFavorito;
      })
  }


}
