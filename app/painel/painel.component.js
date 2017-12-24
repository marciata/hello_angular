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
var PainelComponent = (function () {
    function PainelComponent(elemento) {
        this._elemento = elemento;
    }
    PainelComponent.prototype.ngOnInit = function () {
        this.titulo = this.titulo.length > 7
            ? this.titulo.substr(0, 7) + '...'
            : this.titulo;
        // template string do es6. igual this.titulo.substr(0, 7) + '...' 
        // `${this.titulo.substr(0, 7)}...`
    };
    // recebe um callback
    PainelComponent.prototype.fadeOut = function (cb) {
        // para o typescript reconhecer comandos do jquery, é preciso incluir um typing, q é tipo uma 
        // interface cuja implementacao é o proprio jquery. 
        // para incluir, rodar o comando do node node ./node_modules/typings/dist/bin install dt~jquery --global --save
        // isso vai criar uma referencia no arquivo typings.json, q esta na raiz desse projeto
        // o ElementRef é um objeto que encapsula o elemento DOM, por isso, preciso pegar o nativeElement, senao o jquery nao entende
        $(this._elemento.nativeElement).fadeOut(cb);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PainelComponent.prototype, "titulo", void 0);
    PainelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'painel',
            templateUrl: './painel.component.html',
            styleUrls: ['./painel.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PainelComponent);
    return PainelComponent;
}());
exports.PainelComponent = PainelComponent;
//# sourceMappingURL=painel.component.js.map