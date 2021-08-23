import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaParcelasPage } from './lista-parcelas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaParcelasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaParcelasPageRoutingModule {}
