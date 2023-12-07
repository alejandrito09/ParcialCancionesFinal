import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children : [
      {
        path: '',
        redirectTo: 'artists',
        pathMatch: 'full'
      },
      {
        path: 'songs',
        loadChildren: () => import('./song/songs/songs.module').then( m => m.SongsPageModule)
      },
      {
        path: 'create-song',
        loadChildren: () => import('./song/create-song/create-song.module').then( m => m.CreateSongPageModule)
      },
      {
        path: 'detail-song/:id',
        loadChildren: () => import('./song/detail-song/detail-song.module').then( m => m.DetailSongPageModule)
      },
      {
        path: 'singers',
        loadChildren: () => import('./singer/singers/singers.module').then( m => m.SingersPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule {}
