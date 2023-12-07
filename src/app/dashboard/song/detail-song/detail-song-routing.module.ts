import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSongPage } from './detail-song.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSongPageRoutingModule {}
