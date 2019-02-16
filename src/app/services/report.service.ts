import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/theworldrpg-levql/service/http/incoming_webhook';
  constructor(private http: HttpClient) { }

  postReport(sender, title, type, page, description) {
    return this.http.post(this.url + '/postReport', { sender: sender, type: type, page: page, title: title, description: description})
      .subscribe((result) => {
        return result;
      });
  }
  getReportTypes() {
    return this.http.get(this.url + '/getAllReportType');
  }
  getPages() {
    return this.http.get(this.url + '/getAllPages');
  }
}
