import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { AuthenticationService } from '../../../Authentication/services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient , private authService:AuthenticationService) { }

   
  addProductToCart(productId:string):Observable<any>{
   return this.http.post(environment.apiUrl+'cart',{
      productId
      
    })

  }

    UpdateQuantity(productId:string,count:number):Observable<any>{
    return this.http.put(environment.apiUrl+`cart/${productId}`,{
      count
      
    })

  }

  
    GetLoggedusercart():Observable<any>{
    return this.http.get(environment.apiUrl+'cart',{
        headers:{
          token:this.authService.getToken()!
        }
  })

  }


     removeItem(productId:string) :Observable<any>{
     return this.http.delete(environment.apiUrl+`cart/${productId}`,{
        headers:{
          token:this.authService.getToken()!
        }
  })

  }

       clearCart():Observable<any>{
     return this.http.delete(environment.apiUrl+'cart',{
        headers:{
          token:this.authService.getToken()!
        }
  })

  }


}
