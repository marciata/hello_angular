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
var foto_component_1 = require('../foto/foto.component');
// FormGroup para controlar inputs. FormBuilder para construir formgroup. Validators para criar validacao dos campos no form
var forms_1 = require('@angular/forms');
var foto_service_1 = require('../foto/foto.service');
var router_1 = require('@angular/router');
var CadastroComponent = (function () {
    function CadastroComponent(fotoService, fb, route, router) {
        var _this = this;
        this.foto = new foto_component_1.FotoComponent();
        this.mensagem = '';
        this.route = route;
        this.router = router;
        this.fotoService = fotoService;
        this.meuForm = fb.group({
            // Validators.compose é para incluir mais de uma validacao no mesmo campo 
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            url: ['', forms_1.Validators.required],
            descricao: ['']
        });
        this.route.params
            .subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.fotoService.buscaPorId(id)
                    .subscribe(function (foto) { return _this.foto = foto; }, function (erro) { return console.log(erro); });
            }
        });
    }
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        // para evitar que a página seja carregada, igual no javascript
        event.preventDefault();
        this.fotoService.cadastra(this.foto).subscribe(function (res) {
            _this.foto = new foto_component_1.FotoComponent();
            // aqui é como se mensagem fosse um atributo de res, mas na vdd é um metodo get disfarcado
            _this.mensagem = res.mensagem;
            if (!res.inclusao) {
                _this.router.navigate(['']);
            }
        }, function (erro) { return console.log('Ocorreu um erro: ' + erro); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CadastroComponent.prototype, "titulo", void 0);
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro',
            templateUrl: './cadastro.component.html'
        }), 
        __metadata('design:paramtypes', [foto_service_1.FotoService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map