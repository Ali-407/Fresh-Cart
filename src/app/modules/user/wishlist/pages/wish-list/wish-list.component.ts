import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../../Cart/services/cart.service';
import { Product } from '../../../products/models/product';
import { WishlistItemComponent } from '../../components/wishlist-item/wishlist-item.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
  imports: [WishlistItemComponent]
})
export class WishListComponent implements OnInit {

  wishlist: Product[] = [];
  isWishlistLoading = true;
  private readonly toastr=inject(ToastrService)

  constructor(private wishlistService: WishlistService, private CartService: CartService) {}

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist() {
    this.isWishlistLoading = true;
    this.wishlistService.getloggeduserwishlist().subscribe({
      next: (res) => {
        this.wishlist = res.data;
        this.isWishlistLoading = false;
      },
     
    });
  }

  handleAddToCart(productId: string) {
    this.CartService.addProductToCart(productId).subscribe({
      next: (res) => {
        this.toastr.warning('Product Add')
        this.loadWishlist()
        this.wishlist=res
      
      }
    });
  }

  handleRemoveFromWishlist(productId: string) {
    this.wishlistService.removeProduct(productId).subscribe({
      next: (res) => {
        this.toastr.warning('Product Remove')
        this.loadWishlist()
        this.wishlist=res
      }
    });
  }
}
