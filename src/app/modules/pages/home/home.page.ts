import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})

export class HomePage {

    repos: any = [];

    constructor(
        private api: ApiService,
        private utils: UtilsService,
        private navCtrl: NavController
    ) {}

    ionViewDidEnter() {
        this.api.getRepositories('wjsm93').then(data => {
            this.repos = data;
            console.log(this.repos);
        }).catch(err => {
            this.utils.presentToast(err);
        });
    }

    viewCommits(id) {
        this.navCtrl.navigateForward(['pages/repo/' + id]);
    }

}