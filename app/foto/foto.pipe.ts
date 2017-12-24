import { Pipe, PipeTransform} from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform{
    // o any depois dos parenteses é o tipo de retorno
    transform(fotos: FotoComponent[], digitado:string): FotoComponent[] {
        // o trecho aqui de dentro é javascript
        digitado = digitado.toLowerCase();
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado));
    }

}