import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from 'src/app/model/thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(pagina:number, filtro: string, favorito: boolean): Observable<Pensamento[]> {

    const itensPorPagina = 2;
    let params = new HttpParams()
                      .set("_page", pagina)
                      .set("_limit", itensPorPagina)

    //GET /posts?_page=7&_limit=20
    //*Não é uma boa prática dessa forma sem usar o HttpParams()
    //return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`);

    if(filtro.trim().length>1){
      params = params.set("q", filtro);
    }

    if(favorito){
      params = params.set("favorito", true)
    }
    return this.http.get<Pensamento[]>(this.API, {params})
  }


  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento )
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento>{
    pensamento.favorito = !pensamento.favorito;
    return this.editar(pensamento)
  }
}
