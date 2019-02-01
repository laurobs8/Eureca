import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Tarefa } from './tarefa';

@Injectable({
    providedIn: 'root'
})
export class TarefaDataService {
    private tarefaOrigem = new BehaviorSubject({ tarefa: null, key: '' });
    tarefaAtual = this.tarefaOrigem.asObservable();

    constructor() { }

    mudarTarefa(tarefa: Tarefa, key: string) {
        this.tarefaOrigem.next({ tarefa: tarefa, key: key });
    }

}