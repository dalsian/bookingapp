import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  private url = 'http://localhost:3000';

  constructor(public http: HttpClient) { 
  }

  login(credential):Observable<any> {
    console.log("HTTPSERVICE >>>" + JSON.stringify(credential));
    return this.http.post(this.url + "/users/login", credential);
  }
}
