import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrofPageRoutingModule } from './registrof-routing.module';

import { RegistrofPage } from './registrof.page';
import { FormregistroComponent } from './formregistro/formregistro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrofPageRoutingModule
  ],
  declarations: [RegistrofPage, FormregistroComponent]
})
export class RegistrofPageModule {}
