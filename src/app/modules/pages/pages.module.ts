import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home/home.page';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpModule } from '@angular/http';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesRoutingModule,
    HttpModule
  ],
  declarations: [
      HomePage
  ],
  providers: [
      ApiService,
      UtilsService
  ]
})

export class PagesModule {}