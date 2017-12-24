import {Http, Headers, Response} from '@angular/http';
import {FotoComponent} from './foto.component';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable() // para indicar para o angular que deve ser injetado as dependencias nessa classe tbm
export class FotoService {
    http : Http;
    headers : Headers;
    url : string = 'v1/fotos';

    constructor (http : Http){
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    // retorna um objeto do tipo Observable com um objeto Response
    //    cadastra(foto : FotoComponent) : Observable<Response>{
    // retorna um objeto do tipo Observable com qualquer coisa. Pode ser util quando nao tenho um tipo que represente o 
    // retorno que preciso utilizar. A desvantagem é q nao tenho auto complete
    //    cadastra(foto : FotoComponent) : Observable<any>{
        cadastra(foto : FotoComponent) : Observable<MensagemCadastro>{
        if (foto._id){
            return this.http.put(this.url + "/" + foto._id, JSON.stringify(foto), 
                {headers: this.headers})
                .map(() => new MensagemCadastro('Foto alterada com sucesso', false));
        }else{
            return this.http.post(this.url, JSON.stringify(foto), 
                {headers: this.headers})
                .map(() => new MensagemCadastro('Foto incluida com sucesso', true));
        }
    }

    lista() : Observable<FotoComponent[]>{
        return this.http.get(this.url)
        .map(res => res.json()); // ja mapeia a saida para um json direto
    }

    remove(foto : FotoComponent) : Observable<Response>{
        return this.http.delete(this.url + '/' + foto._id); 
    }

    buscaPorId(id : string): Observable<FotoComponent>{
        return this.http.get(this.url + "/" + id).map(res => res.json());
    }
}

export class MensagemCadastro{
    //private mensagem : string;
    //private inclusao : boolean;

    // passar esses parametros no constructor é equivalente a incluir as propriedades private na classe, 
    // como esta na parte comentada e associar aos parametros do constructor
    constructor(private _mensagem : string, private _inclusao : boolean){
        // propriedade private nao pode ser alterada fora da classe e por padrao comeca com underline
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    // é um metodo get, mas sera acessado como se fosse uma propriedade
    // o public é o padrao, entao nao precisaria declarar
    public get mensagem() : string{
        return this._mensagem;
    }

    // esses metodos dao acesso aos atributos para leitura somente
    public get inclusao() : boolean{
        return this._inclusao;
    }
}