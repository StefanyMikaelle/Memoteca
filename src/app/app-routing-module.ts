import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './views/create-thought/create-thought.component';
import { ListThoughtComponent } from './views/list-thought/list-thought.component';
import { DeleteThoughtComponent } from './views/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './views/edit-thought/edit-thought.component';

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
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: DeleteThoughtComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditThoughtComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
