import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSongPageRoutingModule } from './detail-song-routing.module';

import { DetailSongPage } from './detail-song.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSongPageRoutingModule
  ],
  declarations: [DetailSongPage]
})
export class DetailSongPageModule {}
