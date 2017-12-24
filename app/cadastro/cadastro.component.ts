import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http } from '@angular/http';
// FormGroup para controlar inputs. FormBuilder para construir formgroup. Validators para criar validacao dos campos no form
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService} from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    @Input() titulo;
    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;
    fotoService : FotoService;
    route : ActivatedRoute;
    // para pegar as rotas mapeadas no app.route
    router : Router;
    mensagem : string = '';

    constructor(fotoService: FotoService, fb: FormBuilder, route : ActivatedRoute, router : Router){
        this.route = route;
        this.router = router;
        this.fotoService = fotoService;
        this.meuForm = fb.group({
            // Validators.compose é para incluir mais de uma validacao no mesmo campo 
             titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])], // incluir uma validacao aqui
             url:  ['', Validators.required],
             descricao: ['']    
        });

        this.route.params
                .subscribe(
                    params => 
                        {
                            let id = params['id'];
                            if (id){
                                this.fotoService.buscaPorId(id)
                                    .subscribe(
                                        foto => this.foto = foto, 
                                        erro => console.log(erro));
                            }
                        }
                    );                    
    }

    cadastrar(event){
        // para evitar que a página seja carregada, igual no javascript
        event.preventDefault();

        this.fotoService.cadastra(this.foto).subscribe(res => {
                this.foto = new FotoComponent();
                // aqui é como se mensagem fosse um atributo de res, mas na vdd é um metodo get disfarcado
                this.mensagem = res.mensagem;
                if (!res.inclusao){
                    this.router.navigate(['']); 
                }
            },
            erro => console.log('Ocorreu um erro: ' + erro));
    }
}