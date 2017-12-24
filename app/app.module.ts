import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {HttpModule} from '@angular/http'; // importa um provider de conexao http do angular
import 'rxjs/add/operator/map'; // para importar o metodo map no http.get
import {PainelModule} from './painel/painel.module';
// componentes que nao serao reaproveitados nao precisam fazer parte de um modulo
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';
import { routing } from './app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from './button/button.module';

import { ModalModule } from './modal/modal.module';

// transforma a classe em um módulo do angular
@NgModule({
    // BrowserModule = importa modulo para indicar que deve rodar no navegador. Só o modulo principal precisa disso
    //  FotoModule = importa o modulo de foto
    imports: [ BrowserModule, FotoModule, HttpModule, PainelModule, 
            routing, FormsModule, ReactiveFormsModule, ButtonModule, ModalModule], 
    // declarar quais componentes fazem parte desse modulo
    declarations: [AppComponent, CadastroComponent, ListagemComponent], 
    // indicar qual componente sera inicializado junto com o modulo
    bootstrap: [AppComponent]
}) // deve existir pelo menos um modulo principal em aplicacoes angular
export class AppModule {

}

// comentario sobre o arquivo package.json
// tsc -w é o compilador do typescript 
// "start": "npm run tsc:w",  essa linha indica o que sera executado qdo rodar npm start.
// json nao aceita comentarios :(