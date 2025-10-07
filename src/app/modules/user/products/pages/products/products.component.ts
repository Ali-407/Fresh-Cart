import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { CartService } from '../../../Cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../wishlist/services/wishlist.service';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products:Product[]=[]

  private readonly ProductService=inject(ProductsService)
  private readonly cartService=inject(CartService)
  private readonly toastr=inject(ToastrService)
  private readonly wishlistService=inject(WishlistService)






  ngOnInit():void{
    this.getAllProduct()
  }

getAllProduct() {
  this.ProductService.getAllProducts().subscribe({
    next: (res) => {
     this.products=res.data

     
    },
    
    
  });
}


  addToCart(id:string){
    this.cartService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.status=='success'){
        this.toastr.success(res.message);

        }
        
      }
    })
  }

  onAddToWishlist(id:string){
    this.wishlistService.addProductToWishlist(id).subscribe({
      next:(res)=>{
        console.log(res);
        
    }
    })
  }



}