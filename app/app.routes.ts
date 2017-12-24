import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

// mapeamento dos componentes que devem ser carregados de acordo com a url 
const appRoutes : Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: '**', redirectTo: ''}
]
// path: '**' significa qualquer outra rota que nao tenha sido mapeada

export const routing = RouterModule.forRoot(appRoutes);