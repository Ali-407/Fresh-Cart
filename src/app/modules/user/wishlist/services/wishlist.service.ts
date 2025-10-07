import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment.development";
import { AuthenticationService } from "../../../Authentication/services/authentication.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root' 
})
export class WishlistService {

  constructor(
    private readonly http: HttpClient,
    private authSer: AuthenticationService
  ) { }

  addProductToWishlist(productId: string): Observable<any> {
    return this.http.post(environment.apiUrl + 'wishlist', {
      productId
    }, {
      headers: {
        token: this.authSer.getToken()!
      }
    });
  }

  removeProduct(productId: string): Observable<any> {
    return this.http.delete(environment.apiUrl + `wishlist/${productId}`, {
      headers: {
        token: this.authSer.getToken()!
      }
    });
  }

  getloggeduserwishlist(): Observable<any> {
    return this.http.get(environment.apiUrl + 'wishlist', {
      headers: {
        token: this.authSer.getToken()!
      }
    });
  }
}