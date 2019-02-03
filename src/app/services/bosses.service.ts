import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BossesService {

  private url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/theworldrpg-levql/service/http/incoming_webhook/read?secret=qwe';
  constructor(private http: Http) { }

  getBosses() {
    return this.http.get(this.url);
  }
}

