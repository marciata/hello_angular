"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.nome = 'Ok';
        this.estilo = 'btn-default';
        this.tipo = 'button';
        this.desabilitado = false;
        // @Output é para indicar um parametro para saida da execucao. Esse parametro acao recebera o comando 
        // de outro componente, que devera ser executado. Nesse caso. remove da listagem componente
        // acao é um evento customizado
        this.acao = new core_1.EventEmitter();
    }
    ButtonComponent.prototype.executaAcao = function () {
        /*
        if (this.confirmacao){
            if (confirm('Deseja realmente excluir?')){ */
        // chamara o comando do outro componente sem passar nenhum parametro 
        this.acao.emit(null);
        /*    }
            return;
        }
        this.acao.emit(null); */
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "nome", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "estilo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "tipo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "desabilitado", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ButtonComponent.prototype, "acao", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "confirmacao", void 0);
    ButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'botao',
            templateUrl: './button.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonComponent);
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=button.component.js.map