import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../../model/thought';
import { ThoughtService } from '../../services/thought/thoughtHttp.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
})
export class ListThoughtComponent implements OnInit {
  listaPensamentos : Pensamento [] = [];

  constructor(private service : ThoughtService ) {}

  ngOnInit(): void {
    debugger
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
    console.log(this.listaPensamentos.length)
  }

}
