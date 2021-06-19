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

    isLoading = false;
    repoName: string;
    commits: any = [];

    constructor(
        private route: ActivatedRoute,
        private api: ApiService,
        private utils: UtilsService
    ) {}

    ionViewDidEnter() {
        this.route.params.subscribe(data => {
            this.repoName = data.name;
            this.getCommits();
        });
    }

    getCommits() {
        this.isLoading = true;
        this.api.getCommits(this.repoName).then(data => {
            this.commits = data;
            this.isLoading = false;
        }).catch(err => {
            this.utils.presentToast(err);
            this.isLoading = false;
        })
    }

    viewCommit(url) {
        window.open(url, "_blank");
    }

}