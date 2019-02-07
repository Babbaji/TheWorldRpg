import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/theworldrpg-levql/service/http/incoming_webhook/read';
  constructor(private http: Http) { }

  getItems() {
    return this.http.get(this.url);
  }
  getRings() {
    return this.http.get(this.url);
  }
}

