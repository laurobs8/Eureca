import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { AberturaComponent } from './abertura/abertura.component';
import { EditarComponent } from './editar/editar.component';

const TODO_ROTAS: Routes = [
    {
        path: '',
        component: AberturaComponent
    },
    {
        path: 'abertura',
        component: AberturaComponent
    },
    {
        path: 'to-do',
        component: EditarComponent
    },
    {
        path: 'about',
        component: SobreComponent
    }
];
export const rotas: ModuleWithProviders = RouterModule.forRoot(TODO_ROTAS)
