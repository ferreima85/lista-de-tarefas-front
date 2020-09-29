import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service'
import { Router } from '@angular/router';
import { AtividadesComponent } from '../atividades/atividades.component';

export class Lista {
  constructor(
    public id: number,
    public descricao: string,
    public feito: boolean,
    public data: Date
  ){

  }
}

@Component({
  selector: 'app-lista-atividades',
  templateUrl: './lista-atividades.component.html',
  styleUrls: ['./lista-atividades.component.css']
})
export class ListaAtividadesComponent implements OnInit {

  listaAtividades: Lista[]

  message = 'Atividade apagada com sucesso!'
  sucesso = false

  constructor(
    private listaServico:TodoDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.selecionarAtividades();
  }

  selecionarAtividades() {
    this.listaServico.selecionarTodasAtividades('marco').subscribe(
      response => {
        console.log(response);
        this.listaAtividades = response;
      }
    )
  }

  apagarAtividade(id) {
    console.log(`Apagar a atividade ${id}`)
    this.listaServico.apagarAtividade(id).subscribe(
      response => {
        console.log(response);
        this.sucesso = true;
        this.selecionarAtividades();
      }
    )
  }

  atualizarAtividade(id) {
    console.log(`Atualizar a atividade ${id}`)
    this.router.navigate(['atividades',id])
  }

  adicionarAtividade(id){
    this.router.navigate(['atividades',-1])
  }

}
