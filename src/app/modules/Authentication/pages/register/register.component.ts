import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { ErrorMessageComponent } from "../../../../shared/components/error-message/error-message.component";
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ErrorMessageComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  errorMsg:string=''
  private readonly authenticationService=inject(AuthenticationService);
  private readonly router=inject(Router);
  isloading:boolean=false
  
  
  
  authForm=new FormGroup({

    name:new FormControl('',[Validators.required ,Validators.maxLength(20) ,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required ,Validators.email]),
    password:new FormControl('',[Validators.required ,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
    rePassword:new FormControl('',[Validators.required ,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
  },  {validators:this.checkrePasswordvalidation})

  
  checkrePasswordvalidation(control:AbstractControl){
    if(control.get('password')?.value==control.get('rePassword')?.value){
      return null;
    }else{
      return{
        mismatch:true
      }
    }
  }

  isShowPassword:boolean=false;
  showPassword(){
    this.isShowPassword=!this.isShowPassword
  }

  isShowRePassword: boolean = false;

  
showRePassword() {
  this.isShowRePassword = !this.isShowRePassword;
}

  getValues(){
    

    //  console.log(this.authForm.value);
    // // console.log(this.authForm);
  
    
    
    
    // if(this.authForm.controls.email.valid){
    //   console.log(this.);
      
    // }
    
    
   
    
    
    // if(this.name.valid){
    //   console.log(this.name.value);
      
    // }
    

    if(this.authForm.invalid){
      this.authForm.get('rePassword')?.setValue(' ')
      this.authForm.markAllAsTouched()
      
    }else{
      
     console.log(this.authForm.value);
     this.isloading=true
     this.authenticationService.register(this.authForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        


        if(res.message=='success'){
          this.router.navigate(['/login'])
          this.isloading=false
        }
        
      },
      error:(error)=>{
        console.log(error);
        this.errorMsg=error.error.message
        this.isloading=false
      }
     })
     
    }
    

  }

}
