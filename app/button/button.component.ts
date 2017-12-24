import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'botao',
    templateUrl : './button.component.html'
})
export class ButtonComponent{
    @Input() nome : string = 'Ok';
    @Input() estilo : string = 'btn-default';
    @Input() tipo : string = 'button';
    @Input() desabilitado : boolean = false;
    // @Output é para indicar um parametro para saida da execucao. Esse parametro acao recebera o comando 
    // de outro componente, que devera ser executado. Nesse caso. remove da listagem componente
    // acao é um evento customizado
    @Output() acao =  new EventEmitter();
    @Input() confirmacao : boolean;

    executaAcao(){
        /*
        if (this.confirmacao){
            if (confirm('Deseja realmente excluir?')){ */
                // chamara o comando do outro componente sem passar nenhum parametro 
                this.acao.emit(null);
        /*    }
            return;
        }
        this.acao.emit(null); */
    }
}