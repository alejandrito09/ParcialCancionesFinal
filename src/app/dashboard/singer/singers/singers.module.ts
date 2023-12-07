import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingersPageRoutingModule } from './singers-routing.module';

import { SingersPage } from './singers.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingersPageRoutingModule,
    
  ],
  declarations: [SingersPage]
})
export class SingersPageModule {}
