import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { UmnUkmPage } from './umn-ukm.page';
import { UmnUkmRoutingModule } from './umn-ukm-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    UmnUkmRoutingModule
  ],
  declarations: [UmnUkmPage]
})
export class UmnUkmPageModule {}
