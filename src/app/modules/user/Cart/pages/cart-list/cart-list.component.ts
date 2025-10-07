import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.interface';
import { CartItemComponent } from "../../components/cart-item/cart-item.component";
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-list',
  imports: [CartItemComponent, RouterLink],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent implements OnInit {

  cartDetails:Cart={} as Cart
  private readonly cartService=inject(CartService)
  private readonly toastr=inject(ToastrService)

  

  ngOnInit():void{
    this.loadCartItems()
  }

  loadCartItems(){
    this.cartService.GetLoggedusercart().subscribe({
      next:(res)=>{
       this.cartDetails=res
       
      //  console.log(res);
       
        
      }
    })
  }

  removeItem(productId:string){
    this.cartService.removeItem(productId).subscribe({
      next:(res)=>{
        this.toastr.warning('Product Remove')
       this.cartDetails=res

      }
    })
  }

    updateQuantity(productId:string,count:number){
    this.cartService.UpdateQuantity(productId,count).subscribe({
      next:(res)=>{
        this.toastr.warning('Product Updated')
        // this.loadCartItems()
       this.cartDetails=res

      }
    })
  }

  
  

}
