import { Component, inject, OnInit } from '@angular/core';
import { BrandServiceService } from '../../services/brand-service.service';
import { Brand } from '../../../Cart/models/cart.interface';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {


  Brands:Brand[]=[]
  private readonly brandServiceService=inject(BrandServiceService)


  ngOnInit():void{
    this.getAllBrands()
  }


  getAllBrands(){
    this.brandServiceService.getAllBrands().subscribe({
      next:(res)=>{
        this.Brands=res.data
        
      }
    })
  }

}
