import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroModulos'
})
export class FiltroModulosPipe implements PipeTransform {

  transform( array: any[], texto: any): any {

    if( texto === '' ) {
      return array;
    }

    return array.filter( item => item.id.includes( texto ));

  }

}
