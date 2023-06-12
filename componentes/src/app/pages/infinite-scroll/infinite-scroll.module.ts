import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiniteScrollPageRoutingModule } from './infinite-scroll-routing.module';

import { InfiniteScrollPage } from './infinite-scroll.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    InfiniteScrollPageRoutingModule
  ],
  declarations: [InfiniteScrollPage]
})
export class InfiniteScrollPageModule {}
