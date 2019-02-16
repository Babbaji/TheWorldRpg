import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/theworldrpg-levql/service/http/incoming_webhook/read';
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.url);
  }
  getRings() {
    return this.http.get(this.url);
  }

  getItemsDroppedBy(bossName) {
    return this.http.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/theworldrpg-levql/service/http/incoming_webhook/itemsDroppedBy', { bossName: bossName})
      .subscribe((result) => {
        console.log(result);
      });
  }
}

