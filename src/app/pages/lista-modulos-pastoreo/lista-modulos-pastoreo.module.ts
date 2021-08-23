import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaModulosPastoreoPageRoutingModule } from './lista-modulos-pastoreo-routing.module';

import { ListaModulosPastoreoPage } from './lista-modulos-pastoreo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaModulosPastoreoPageRoutingModule
  ],
  declarations: [ListaModulosPastoreoPage]
})
export class ListaModulosPastoreoPageModule {}
