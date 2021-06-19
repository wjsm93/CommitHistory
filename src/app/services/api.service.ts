import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ApiService {

  public APIUrl: string;
  serviceHeader: any;

  constructor(public http: Http) {
    this.APIUrl = "https://api.github.com";
    this.serviceHeader = new Headers({
      'Accept': 'application/vnd.github.v3+json'
    });
  }

}