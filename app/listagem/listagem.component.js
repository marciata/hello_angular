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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var foto_service_1 = require('../foto/foto.service');
var ListagemComponent = (function () {
    // @Inject é a injecao de dependencia do angular. Nesse exemplo, esta injetando um modulo Http na variavel http
    // Para o typescript, ao inves de declarar @Inject(Http) http, poderia ser especificado apenas o tipo da 
    // variavel e a injecao seria automatica, ou seja, o trecho pode ser substituido por constructor(http:Http)
    // constructor(@Inject(Http) http){ 
    function ListagemComponent(fotoService) {
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
        var _this = this;
        // tipagem dinamica do typescript
        this.fotos = [];
        this.mensagem = '';
        this.fotoService = fotoService;
        fotoService.lista() // ja mapeia a saida para um json direto
            .subscribe(function (fotos) { _this.fotos = fotos; }, function (erro) { return console.log(erro); });
    }
    ListagemComponent.prototype.remove = function (foto, painelComponent) {
        var _this = this;
        this.fotoService
            .remove(foto)
            .subscribe(function (fotos) {
            console.log('Foto removida com sucesso');
            painelComponent.fadeOut(function () {
                // angular nao atualiza a view da lista de fotos quando o array de fotos é alterado
                // a atualizacao na view so acontece quando a referencia a qual o array de fotos aponta, mudar
                // por isso devo criar outra variavel com o conteudo de fotos, menos o elemento que acabei de deletar
                // e atribuir a variavel fotos. slice vai fazer isso
                var novasFotos = _this.fotos.slice(0);
                var indice = novasFotos.indexOf(foto);
                // remove o elemento que esta no indice indice, do array
                novasFotos.splice(indice, 1);
                // mudo a referencia para forçar o angular a atualizar a view
                _this.fotos = novasFotos;
                _this.mensagem = 'Foto removida com sucesso!';
            });
        }, function (erro) {
            console.log(erro);
            _this.mensagem = 'Ocorreu um erro ao remover a foto';
        });
    };
    ListagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listagem',
            templateUrl: './listagem.component.html'
        }),
        __param(0, core_1.Inject(foto_service_1.FotoService)), 
        __metadata('design:paramtypes', [Object])
    ], ListagemComponent);
    return ListagemComponent;
}());
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map