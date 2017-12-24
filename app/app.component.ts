// Decorator para criar um Component do angular
import {Component, Inject} from '@angular/core';


// definicao de como o componente sera acessado no html. Nesse caso, vai ser acessado pela tag <app></app>
// o processamento de decorator é parte do typescript
@Component({
    moduleId: module.id, // isso é para que seja considerado o caminho relativo em relacao a esse arquivo
    selector: 'app',
    templateUrl: './app.component.html'  //se nao fosse o moduleId, teria q ser assim './app/app.component.html' // template do componente
}) // export serve pra dizer q essa classe é exportavel
export class AppComponent{  // por padrao, classe AppComponent fica num arquivo app.component
}