import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class UtilsService {

  constructor(
      private toastCtrl: ToastController
  ) { }

  async presentToast(msg, duration = 2000) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: duration
    });
    toast.present();
  }

}