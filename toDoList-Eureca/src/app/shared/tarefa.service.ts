import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class TarefaService {

  constructor(private db: AngularFireDatabase) { }

  inserir(tarefa: Tarefa) {
    this.db.list('tarefa').push(tarefa)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  atualizar(tarefa: Tarefa, key: string) {
    this.db.list('tarefa').update(key, tarefa)
      .catch((error: any) => {
        console.log(error);
      });
  }

  todos() {
    return this.db.list('tarefa')
      .snapshotChanges()
      .pipe(
       map(changes => {
         return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
       })
      );
  }

  // delete(key: string) {
  //   this.db.object(`tarefa/${key}`).remove();
  // }
}
