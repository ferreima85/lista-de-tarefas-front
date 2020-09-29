import { HttpClient } from '@angular/common/http' ;
import { Injectable } from '@angular/core';
import { Lista } from '../../lista-atividades/lista-atividades.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

    selecionarTodasAtividades(usuario){
      return this.http.get<Lista[]>(`http://localhost:8080/usuarios/${usuario}/atividades`)
    }

    selecionarAtividade(usuario, id){
      return this.http.get<Lista>(`http://localhost:8080/atividades/usuarios/${usuario}/id/${id}`)
    }
    
    apagarAtividade(id){
      return this.http.delete(`http://localhost:8080/apagarAtividade/id/${id}`)
    }

    atualizarAtividade(usuario, id, atividades){
      return this.http.put(`http://localhost:8080/usuarios/${usuario}/atualizarAtividade/id/${id}`, atividades);
    }
    
    adicionarAtividade(usuario, atividades){
      return this.http.post(`http://localhost:8080/usuarios/${usuario}/adicionarAtividade/`, atividades);
    }
}
