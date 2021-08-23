import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroParcelas'
})
export class FiltroParcelasPipe implements PipeTransform {

  transform( array: any[], texto: any): any {

    if( texto === '' ) {
      return array;
    }

    return array.filter( item => item.numeroParcela.toString().includes( texto ));

  }

}
