import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resp } from '../common/resp';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private userDetailsUrl = 'http://localhost:8081/user/validate';

  constructor(private httpClient : HttpClient) { }

  validateUser(): Observable<Resp>{ 
    return this.httpClient.get<Resp>(this.userDetailsUrl);
  }
}


