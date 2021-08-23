import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParcelaPageRoutingModule } from './parcela-routing.module';

import { ParcelaPage } from './parcela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParcelaPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ParcelaPage
  ],
  declarations: [ParcelaPage]
})
export class ParcelaPageModule {}
