import { Component, Input, OnInit, ElementRef} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css'] 
})
export class PainelComponent implements OnInit {
    @Input() titulo : string;
    // para receber uma referencia a um elemento dom
    private _elemento: ElementRef;


    constructor(elemento : ElementRef){
        this._elemento = elemento;
    }

    ngOnInit(){
        this.titulo = this.titulo.length > 7 
        ? this.titulo.substr(0, 7) + '...' 
        : this.titulo;

        // template string do es6. igual this.titulo.substr(0, 7) + '...' 
        // `${this.titulo.substr(0, 7)}...`
        
    }

    // recebe um callback
    fadeOut(cb) {   
        
        // para o typescript reconhecer comandos do jquery, é preciso incluir um typing, q é tipo uma 
        // interface cuja implementacao é o proprio jquery. 
        // para incluir, rodar o comando do node node ./node_modules/typings/dist/bin install dt~jquery --global --save
        // isso vai criar uma referencia no arquivo typings.json, q esta na raiz desse projeto
        // o ElementRef é um objeto que encapsula o elemento DOM, por isso, preciso pegar o nativeElement, senao o jquery nao entende
         $(this._elemento.nativeElement).fadeOut(cb);
     }
}