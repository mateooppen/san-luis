import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaParcelasPageRoutingModule } from './lista-parcelas-routing.module';

import { ListaParcelasPage } from './lista-parcelas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaParcelasPageRoutingModule,
    PipesModule
  ],
  exports: [
    ListaParcelasPage
  ],
  declarations: [ListaParcelasPage]
})
export class ListaParcelasPageModule {}
