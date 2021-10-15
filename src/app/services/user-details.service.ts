import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Resp } from '../common/resp';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDetails} from '../common/user-details';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {


  private userLoginUrl = 'http://localhost:8081/user/validate';
  private userSignUpUrl = 'http://localhost:8081/user/register';
  private userFrgtPswrdUrl = 'http://localhost:8081/user/frgtPswrd';

  constructor(private httpClient : HttpClient) { }

  /*validateUser(): Observable<Resp>{ 
    return this.httpClient.get<Resp>(this.userDetailsUrl);
  }*/
  public sendGetRequest(){
    return this.httpClient.get(this.userLoginUrl).pipe(
      map(value => Object.assign(new Resp , value))
    );
  }


    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }


    // HttpClient API post() method => userLogin
  validateUser(userDetails): Observable<Resp> {
    return this.httpClient.post<Resp>(this.userLoginUrl , JSON.stringify(userDetails), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 

    // HttpClient API post() method => sign up
    registerUser(userDetails): Observable<Resp> {
      return this.httpClient.post<Resp>(this.userSignUpUrl , JSON.stringify(userDetails), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    } 



    // Update Password
    updatePassword(userDetails): Observable<Resp> {
      return this.httpClient.post<Resp>(this.userFrgtPswrdUrl , JSON.stringify(userDetails), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

   // Error handling 
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


  



}


