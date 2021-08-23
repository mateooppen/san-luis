import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaModulosPastoreoPage } from './lista-modulos-pastoreo.page';

const routes: Routes = [
  {
    path: '',
    component: ListaModulosPastoreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaModulosPastoreoPageRoutingModule {}
