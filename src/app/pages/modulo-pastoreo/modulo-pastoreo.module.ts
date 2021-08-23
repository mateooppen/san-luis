import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuloPastoreoPageRoutingModule } from './modulo-pastoreo-routing.module';

import { ModuloPastoreoPage } from './modulo-pastoreo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuloPastoreoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModuloPastoreoPage]
})
export class ModuloPastoreoPageModule {}
