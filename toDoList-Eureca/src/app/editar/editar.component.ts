import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { TarefaDataService } from '../shared/tarefa-data.service';
import { Tarefa } from '../shared/tarefa';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  tarefa: Tarefa;
  key: string = '';

  constructor(private tarefaService: TarefaService, private tarefaDataService: TarefaDataService) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
    this.tarefaDataService.tarefaAtual.subscribe(data => {
      if (data.tarefa && data.key) {
        this.tarefa = new Tarefa();
        this.tarefa.titulo = data.tarefa.titulo;
        this.tarefa.detalhes = data.tarefa.detalhes;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if (this.key) {
      this.tarefaService.atualizar(this.tarefa, this.key)

    } else {
      this.tarefaService.inserir(this.tarefa)
    }

    this.tarefa = new Tarefa();
  }

}
