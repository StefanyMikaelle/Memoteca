import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './views/create-thought/create-thought.component';
import { ListThoughtComponent } from './views/list-thought/list-thought.component';

const routes: Routes = [
  {
    path: '',
    component: ListThoughtComponent,
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CreateThoughtComponent
  },
  {
    path: 'listarPensamento',
    component: ListThoughtComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
