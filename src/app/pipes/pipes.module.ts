import { NgModule } from '@angular/core';
import { FiltroModulosPipe } from './filtro-modulos.pipe';
import { FiltroParcelasPipe } from './filtro-parcelas.pipe';


@NgModule({
  declarations: [
    FiltroParcelasPipe,
    FiltroModulosPipe
  ],
  exports: [
    FiltroParcelasPipe,
    FiltroModulosPipe
  ]
})
export class PipesModule { }
