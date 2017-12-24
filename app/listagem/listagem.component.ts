import { Component, Inject } from '@angular/core';
import {Http} from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import { PainelComponent } from '../painel/painel.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{
    // tipagem dinamica do typescript
    fotos: FotoComponent[] = [];
    fotoService : FotoService;
    mensagem : string = '';
    // @Inject é a injecao de dependencia do angular. Nesse exemplo, esta injetando um modulo Http na variavel http
    // Para o typescript, ao inves de declarar @Inject(Http) http, poderia ser especificado apenas o tipo da 
    // variavel e a injecao seria automatica, ou seja, o trecho pode ser substituido por constructor(http:Http)
    // constructor(@Inject(Http) http){ 
    constructor(@Inject(FotoService) fotoService){
//        var that = this;
 //       let stream = http.get('v1/fotos');
/*        stream.subscribe(function (res){
            that.fotos = res.json(); // nessa linha, o this refere-se ao objeto de stream, por isso foi 
            // preciso criar uma variavel that q aponta para o AppComponent
        }); */
        // Arrow function. Nesse caso, o this ainda refere-se ao AppComponent
/*        stream.subscribe(res => {
            this.fotos = res.json(); 
        }) */

        this.fotoService = fotoService;
        fotoService.lista() // ja mapeia a saida para um json direto
            .subscribe(fotos => {this.fotos = fotos}, erro => console.log(erro));
    }

    remove(foto : FotoComponent, painelComponent : PainelComponent) : void{
        this.fotoService
            .remove(foto)
            .subscribe(fotos => {
                    console.log('Foto removida com sucesso');
                    painelComponent.fadeOut(() => {
                        // angular nao atualiza a view da lista de fotos quando o array de fotos é alterado
                        // a atualizacao na view so acontece quando a referencia a qual o array de fotos aponta, mudar
                        // por isso devo criar outra variavel com o conteudo de fotos, menos o elemento que acabei de deletar
                        // e atribuir a variavel fotos. slice vai fazer isso
                        let novasFotos = this.fotos.slice(0);
                        let indice = novasFotos.indexOf(foto);
                        // remove o elemento que esta no indice indice, do array
                        novasFotos.splice(indice, 1);
                        // mudo a referencia para forçar o angular a atualizar a view
                        this.fotos = novasFotos;
                        this.mensagem = 'Foto removida com sucesso!';
                    });
                }, 
                erro => {
                        console.log(erro);
                        this.mensagem = 'Ocorreu um erro ao remover a foto';
                }    
            );
    }
    
}