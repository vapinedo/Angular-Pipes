import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform( textoACapitalizar: string, capitalizarTodo: boolean = true ): string {

    return 'Texto Capitzalizado';
  }

} 
