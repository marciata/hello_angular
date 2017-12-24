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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var FotoService = (function () {
    function FotoService(http) {
        this.url = 'v1/fotos';
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    // retorna um objeto do tipo Observable com um objeto Response
    //    cadastra(foto : FotoComponent) : Observable<Response>{
    // retorna um objeto do tipo Observable com qualquer coisa. Pode ser util quando nao tenho um tipo que represente o 
    // retorno que preciso utilizar. A desvantagem é q nao tenho auto complete
    //    cadastra(foto : FotoComponent) : Observable<any>{
    FotoService.prototype.cadastra = function (foto) {
        if (foto._id) {
            return this.http.put(this.url + "/" + foto._id, JSON.stringify(foto), { headers: this.headers })
                .map(function () { return new MensagemCadastro('Foto alterada com sucesso', false); });
        }
        else {
            return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers })
                .map(function () { return new MensagemCadastro('Foto incluida com sucesso', true); });
        }
    };
    FotoService.prototype.lista = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); }); // ja mapeia a saida para um json direto
    };
    FotoService.prototype.remove = function (foto) {
        return this.http.delete(this.url + '/' + foto._id);
    };
    FotoService.prototype.buscaPorId = function (id) {
        return this.http.get(this.url + "/" + id).map(function (res) { return res.json(); });
    };
    FotoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FotoService);
    return FotoService;
}());
exports.FotoService = FotoService;
var MensagemCadastro = (function () {
    //private mensagem : string;
    //private inclusao : boolean;
    // passar esses parametros no constructor é equivalente a incluir as propriedades private na classe, 
    // como esta na parte comentada e associar aos parametros do constructor
    function MensagemCadastro(_mensagem, _inclusao) {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
        // propriedade private nao pode ser alterada fora da classe e por padrao comeca com underline
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }
    Object.defineProperty(MensagemCadastro.prototype, "mensagem", {
        // é um metodo get, mas sera acessado como se fosse uma propriedade
        // o public é o padrao, entao nao precisaria declarar
        get: function () {
            return this._mensagem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MensagemCadastro.prototype, "inclusao", {
        // esses metodos dao acesso aos atributos para leitura somente
        get: function () {
            return this._inclusao;
        },
        enumerable: true,
        configurable: true
    });
    return MensagemCadastro;
}());
exports.MensagemCadastro = MensagemCadastro;
//# sourceMappingURL=foto.service.js.map