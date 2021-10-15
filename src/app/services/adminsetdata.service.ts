import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Itemsresp } from '../common/itemsresp';
import { Resp } from '../common/resp';

@Injectable({
  providedIn: 'root'
})
export class AdminsetdataService {

  private getItemsUrl = 'http://localhost:8081/items/getItems';
  private updateItemsUrl = 'http://localhost:8081/items/updateItem';

  constructor(private httpClient : HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }





      // HttpClient API post() method => userLogin
      getItems(): Observable<Itemsresp> {
        return this.httpClient.get<Itemsresp>(this.getItemsUrl , this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
      } 




      updateItem(item: any): Observable<Resp>{
        return this.httpClient.post<Resp>(this.updateItemsUrl , JSON.stringify(item), this.httpOptions)
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
