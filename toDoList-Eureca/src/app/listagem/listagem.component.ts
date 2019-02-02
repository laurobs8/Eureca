import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaService } from '../shared/tarefa.service';
import { TarefaDataService } from '../shared/tarefa-data.service';
import { Tarefa } from '../shared/tarefa';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  tarefas: Observable<any>;

  constructor(private tarefaService: TarefaService, private tarefaDataService: TarefaDataService) { }

  ngOnInit() {
    this.tarefas = this.tarefaService.todos();
  }

  delete(key: string) {
    this.tarefaService.delete(key); // TODO
  }

  editar(tarefa: Tarefa, key: string) {
    this.tarefaDataService.mudarTarefa(tarefa, key);
  }
}
