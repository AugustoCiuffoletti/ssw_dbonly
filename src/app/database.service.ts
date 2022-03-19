import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // per Observable
import { HttpClient } from '@angular/common/http'; // per HttpClient

@Injectable()
export class DatabaseService {
  key: string;
  URL: string =
    'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';

  constructor(private http: HttpClient) {
    this.key = '9cf84c28';
  }

  public getvalue(key: string): Observable<Object> {
    return this.http.get<Object>(this.URL + '/get?key=' + key);
  }

  public postvalue(data: Object, key: string): Observable<Object> {
    return this.http.post(
      this.URL + '/post?key=' + key + '&msg=' + JSON.stringify(data), null
    );
  }
}
