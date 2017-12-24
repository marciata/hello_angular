import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id, // sem isso, o caminho é em relacao a raiz do projeto
    selector: 'foto',
    templateUrl: './foto.component.html', //'./app/foto/foto.component.html'
    styleUrls: ['./foto.component.css'] // o angular vai criar um nome unico para o estilo, e so sera aplicado para esse componente
    // essa propriedade indica como o angular vai tratar os estilos desse componente. O padrao é Emulated
    // significa que o angular vai emular o recurso shadow DOM do html5. Esse recurso permite encapsular javascript, 
    // css e html em um componente. Alem de emulated, é possivel definir Native, para ser nativo do navegador, mas 
    // essa opcao nao esta disponivel para todos os navegadores, e none, que simplesmente inclui o css sem nenhum tratamento.
    //encapsulation: ViewEncapsulation.Emulated
})
export class FotoComponent {
    // @Input é um decorator que indica que esse valor será inserido nessa variavel
    @Input() titulo:string = ''; // esse tipo de declaracao, "propriedade;" é possivel graças ao typescript
    @Input() url:string = '';
    descricao:string = '';
    _id : string;
}