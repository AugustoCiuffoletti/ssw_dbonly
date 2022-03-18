import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // per Observable
import { HttpClient } from '@angular/common/http'; // per HttpClient

@Injectable()
export class DatabaseService {
  key: string;
  URL: string =
    'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';

  teatro = {
    platea: ['Hallo'],
    palchi: ['World'],
  };

  constructor(private http: HttpClient) {
    this.key = '9cf84c28';
  }

  public getvalue(): Observable<Object> {
    return this.http.get<Object>(this.URL + '/get?key=' + this.key);
  }

  public postvalue(data: Object): Observable<Object> {
    return this.http.post(
      this.URL + '/get?key=' + this.key,
      JSON.stringify(data)
    );
  }
}
