import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingersPage } from './singers.page';

const routes: Routes = [
  {
    path: '',
    component: SingersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingersPageRoutingModule {}
