import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ErrorMessageComponent } from "../../../../../shared/components/error-message/error-message.component";
import { ActivatedRoute, Router } from "@angular/router";
import { OrdersService } from "../../services/orders.service";

@Component({
  selector: 'app-address',
  imports: [ErrorMessageComponent,ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {

  
  errorMsg:string=''
  cartId:string=''
  addressForm!:any
  private readonly orederService=inject(OrdersService);
  private readonly router=inject(Router);
  private readonly activatedRoute=inject(ActivatedRoute);
  private readonly fb=inject(FormBuilder);
  isloading:boolean=false
  
  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe((res)=>(
    this.cartId=res.get('id')!
    ))
    this.initForm();
  }
  
  
 initForm(){
  this.addressForm=this.fb.group({
    details:['',[Validators.required]], 
    phone:['',[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
    city:['',[Validators.required]],
  })
}
  
  

  getValues(){
  
    if(this.addressForm.invalid){
      this.addressForm.markAllAsTouched()
      
    }else{
      
     console.log(this.addressForm.value);
     this.isloading=true
     this.orederService.CreateOreder(this.cartId,this.addressForm.value).subscribe({
      next:(res)=>{
        console.log(res);
      
        if(res.status=='success'){
         
          this.isloading=false

          
           window.location.href = res.session.url;
        }
        
      },
    
     })
     
    }
    

  }

}


