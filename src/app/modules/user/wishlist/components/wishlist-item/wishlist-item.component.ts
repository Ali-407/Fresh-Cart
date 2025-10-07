import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../products/models/product';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss']
})
export class WishlistItemComponent {

  @Input() product!: Product;

  @Output() addToCart = new EventEmitter<string>();
  @Output() removeFromWishlist = new EventEmitter<string>();

  isWishlistLoading = false;

  onAddToCart() {
    this.addToCart.emit(this.product._id);
    this.isWishlistLoading = true;

    setTimeout(() => {
      this.isWishlistLoading = false;
    }, 3000);
  }

  onRemoveFromWishlist() {
    this.removeFromWishlist.emit(this.product._id);
  }
}


//  onRemoveFromWishlist(productId:string){
//     this.cartService.onRemoveFromWishlist(productId).subscribe({
//       next:(res)=>{
//         this.toastr.warning('Product Remove')
//         // this.loadCartItems()
//          this.cartDetails=res

//       }
