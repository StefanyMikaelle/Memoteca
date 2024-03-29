import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pensamento } from 'src/app/model/thought';
import { ThoughtService } from 'src/app/services/thought/thoughtHttp.service';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private service : ThoughtService,
              private router: Router,
              private formBuilder : FormBuilder
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo : ['', Validators.compose( [
                      Validators.required,
                      Validators.pattern(/(.|\s)*\S(.|\s)*/)
                      ])],
      autoria: ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(3)
                  ])],
      modelo: ['modelo1'],
      favorito: [false]
    })
  }

  criarPensamento() {
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
          this.router.navigate(['/listarPensamento'])
      })
    }
  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao';
    }else{
      return 'botao__desabilitado'
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
