import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product: Product = {} as Product
  @Output() addToCart: EventEmitter<string> = new EventEmitter<string>()
  @Output() addToWishlist: EventEmitter<string> = new EventEmitter<string>()
 

  isloading: boolean = false
  //false here mean that the btn will work
  // if it is true this mean that the btn will be disabled

  OnaddToCart() {
    this.addToCart.emit(this.product._id)
    this.isloading = true
    //mean that the btn will disabled and will show (Adding ...)
    setTimeout(() => {
      this.isloading = false
      //mean that the btn will be enabled after 3 sec
    }, 3000);
  }





isInWishlist: boolean = false;
isWishlistLoading: boolean = false;

onAddToWishlist(id: string) {
  this.isWishlistLoading = true;
  this.addToWishlist.emit(this.product._id);

  setTimeout(() => {
    this.isInWishlist = !this.isInWishlist;
    this.isWishlistLoading = false;
  }, 1000);
}

}
