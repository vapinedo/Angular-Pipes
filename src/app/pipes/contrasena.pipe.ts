import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(texto: string, mostrarTexto: boolean = true ): string {

    return ( mostrarTexto ) ? '*'.repeat( texto.length ) : texto;
  }

}
