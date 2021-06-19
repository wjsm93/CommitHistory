import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home/home.page';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesRoutingModule
  ],
  declarations: [
      HomePage
  ]
})

export class PagesModule {}