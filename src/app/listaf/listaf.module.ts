import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListafPageRoutingModule } from './listaf-routing.module';

import { ListafPage } from './listaf.page';
import { ListfactComponent } from './listfact/listfact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListafPageRoutingModule
  ],
  declarations: [ListafPage, ListfactComponent]
})
export class ListafPageModule {}
