import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  public APIUrl: string;
  private gitOwner: string = 'wjsm93';
  private token: string = 'Z2hwX0NIM3U1QWU1RnVuOUxDdUZoZVlwb2c4QU0wVVZiSzRQOHRQSg==';
  serviceHeader: any;

  constructor(public http: Http) {
    this.APIUrl = 'https://api.github.com';
    this.serviceHeader = new Headers({
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': 'token ' + atob(this.token)
    });
  }

  getRepositories(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        this.http.get(this.APIUrl + '/users/'+this.gitOwner+'/repos').pipe(map(res => res.json())).toPromise().then(data => {
            resolve(data);
        }).catch(err => {
            reject(this.getErrorResponse(err));
        });
    });
  }

  getCommits(repo): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        this.http.get(this.APIUrl + '/repos/'+this.gitOwner+'/'+repo+'/commits').pipe(map(res => res.json())).toPromise().then(data => {
            resolve(data);
        }).catch(err => {
            reject(this.getErrorResponse(err));
        });
    });
  }

  getErrorResponse(err) {
    if (err.status == 404) {
        if (err._body) {
            const _body = JSON.parse(err._body);
            return 'Error: ' + _body.message;
        }
    } else {
        return 'Error getting response';
    }
  }

}