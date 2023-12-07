import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSongPageRoutingModule } from './create-song-routing.module';

import { CreateSongPage } from './create-song.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSongPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateSongPage]
})
export class CreateSongPageModule {}
