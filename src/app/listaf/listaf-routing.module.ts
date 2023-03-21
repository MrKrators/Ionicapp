import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListafPage } from './listaf.page';

const routes: Routes = [
  {
    path: '',
    component: ListafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListafPageRoutingModule {}
