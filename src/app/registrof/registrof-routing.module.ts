import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrofPage } from './registrof.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrofPageRoutingModule {}
