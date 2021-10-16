import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Resp } from '../common/resp';
import { CartResp } from '../common/cart-resp';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
 

  private addToCartUrl = 'http://localhost:8081/order/addToCart';
  private cartPageUrl = 'http://localhost:8081/order/getCartDtls';

  constructor(private httpClient : HttpClient) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }


    
    addToCart(orderDetl: any): Observable<Resp>{
      return this.httpClient.post<Resp>(this.addToCartUrl , JSON.stringify(orderDetl), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }


  
  getItems(cartReq: any): Observable<CartItem[]> {
    return this.httpClient.post<CartItem[]>(this.cartPageUrl , JSON.stringify(cartReq), this.httpOptions)
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
