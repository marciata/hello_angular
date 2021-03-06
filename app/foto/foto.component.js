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
var FotoComponent = (function () {
    function FotoComponent() {
        // @Input é um decorator que indica que esse valor será inserido nessa variavel
        this.titulo = ''; // esse tipo de declaracao, "propriedade;" é possivel graças ao typescript
        this.url = '';
        this.descricao = '';
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FotoComponent.prototype, "titulo", void 0);
    __decorate([
        // esse tipo de declaracao, "propriedade;" é possivel graças ao typescript
        core_1.Input(), 
        __metadata('design:type', String)
    ], FotoComponent.prototype, "url", void 0);
    FotoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'foto',
            templateUrl: './foto.component.html',
            styleUrls: ['./foto.component.css'] // o angular vai criar um nome unico para o estilo, e so sera aplicado para esse componente
        }), 
        __metadata('design:paramtypes', [])
    ], FotoComponent);
    return FotoComponent;
}());
exports.FotoComponent = FotoComponent;
//# sourceMappingURL=foto.component.js.map