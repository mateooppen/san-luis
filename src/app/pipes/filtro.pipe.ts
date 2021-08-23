import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( array: any[], texto: any): any {

    if( texto === '' ) {
      return array;
    }

    return array.filter( item => item.numeroParcela.toString().includes( texto ));

  }

}
