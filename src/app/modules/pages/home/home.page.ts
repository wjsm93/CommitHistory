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

    isLoading = false;
    repos: any = [];

    constructor(
        private api: ApiService,
        private utils: UtilsService,
        private navCtrl: NavController
    ) {}

    ionViewDidEnter() {
        this.isLoading = true;
        this.api.getRepositories().then(data => {
            this.repos = data;
            this.isLoading = false;
        }).catch(err => {
            this.utils.presentToast(err);
            this.isLoading = false;
        });
    }

    viewCommits(id) {
        this.navCtrl.navigateForward(['pages/repo/' + id]);
    }

}