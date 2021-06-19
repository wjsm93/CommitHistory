import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    selector: 'app-repo',
    templateUrl: './repo.page.html',
    styleUrls: ['./repo.page.scss'],
})

export class RepoPage {

    repoName: any;

    constructor(
        private route: ActivatedRoute,
        private api: ApiService,
        private utils: UtilsService
    ) {}

    ionViewDidEnter() {
        this.route.params.subscribe(data => {
            this.repoName = data.name;
            console.log("name", this.repoName);
            this.getCommits();
        });
    }

    getCommits() {
        this.api.getCommits(this.repoName).then(data => {
            console.log(data);
        }).catch(err => {
            this.utils.presentToast(err);
        })
    }

}