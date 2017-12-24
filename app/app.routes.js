"use strict";
var router_1 = require('@angular/router');
var cadastro_component_1 = require('./cadastro/cadastro.component');
var listagem_component_1 = require('./listagem/listagem.component');
// mapeamento dos componentes que devem ser carregados de acordo com a url 
var appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: 'cadastro/:id', component: cadastro_component_1.CadastroComponent },
    { path: '**', redirectTo: '' }
];
// path: '**' significa qualquer outra rota que nao tenha sido mapeada
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map