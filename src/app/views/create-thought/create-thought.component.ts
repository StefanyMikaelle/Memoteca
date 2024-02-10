import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThoughtService } from 'src/app/services/thought/thoughtHttp.service';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service : ThoughtService,
              private router: Router
    ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
    })
  }


  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
