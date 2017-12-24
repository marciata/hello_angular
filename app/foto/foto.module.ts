import {NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import {FiltroPorTitulo} from './foto.pipe';
import {FotoService} from './foto.service';

@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo], // componentes que fazem parte desse modulo
    exports: [FotoComponent, FiltroPorTitulo], // quais componentes podem ser usados por outros componentes
    providers: [FotoService] // isso permite que o fotoservice seja injetado nos outros componentes
})
export class FotoModule {}