import { Component, OnInit } from '@angular/core';
import { Lista } from '../lista-atividades/lista-atividades.component';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

  id: Number
  atividade: Lista

  constructor(
    private listaServico: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.atividade = new Lista(-1, '', false, new Date());

    if (this.id != -1) {
      this.listaServico.selecionarAtividade('marco',this.id)
        .subscribe (atividade => this.atividade = atividade)
    }
  }

  updateAtividade(){
    if (this.id == -1) {
      this.listaServico.adicionarAtividade('marco', this.atividade).subscribe (
        atividade => { console.log(atividade)
        this.router.navigate(['listaAtividades'])
        }
      )
    } else {
      this.listaServico.atualizarAtividade('marco', this.id, this.atividade).subscribe (
        atividade => { console.log(atividade)
        this.router.navigate(['listaAtividades'])
        }
      )
  }
}

}
