import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  id:any
  product:Product={}as Product
  private readonly activatedRoute=inject(ActivatedRoute)
  private readonly ProductService=inject(ProductsService)

  ngOnInit():void{
    this.getId()
    this.getProductById()
  }
  getId(){
    this.activatedRoute.paramMap.subscribe({
      next:(value)=>{
       this.id=value.get('id')
      }
    })
    
  }
  getProductById(){
    this.ProductService.getProductByID(this.id).subscribe({
      next:(res)=>{
        console.log(res);
        this.product=res.data
      }
    })
  }
  
}
