import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  public APIUrl: string;
  private token: string = 'Z2hwX0NIM3U1QWU1RnVuOUxDdUZoZVlwb2c4QU0wVVZiSzRQOHRQSg==';
  serviceHeader: any;

  constructor(public http: Http) {
    this.APIUrl = 'https://api.github.com';
    this.serviceHeader = new Headers({
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': 'token ' + atob(this.token)
    });
  }

  getRepositories(user): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        this.http.get(this.APIUrl + '/users/'+user+'/repos').pipe(map(res => res.json())).toPromise().then(data => {
            resolve(data);
        }).catch(err => {
            console.error(err);
            if (err.status == 404) {
                if (err._body) {
                    const _body = JSON.parse(err._body);
                    reject('Error: ' + _body.message);
                }
            } else {
                reject('Error getting repositories');
            }
        });
    });
  }

}