import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessageComponent } from "../../../../shared/components/error-message/error-message.component";
import { AuthenticationService } from '../../services/authentication.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ErrorMessageComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  errorMsg:string=''
  private readonly authenticationService=inject(AuthenticationService);
  private readonly router=inject(Router);
  isloading:boolean=false
  
  
  
  authForm=new FormGroup({

    email:new FormControl('',[Validators.required ,Validators.email]),
    password:new FormControl('',[Validators.required ,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
  }, )


    isShowPassword:boolean=false;
  showPassword(){
    this.isShowPassword=!this.isShowPassword
  }


  
  

  getValues(){
  
    if(this.authForm.invalid){
      this.authForm.markAllAsTouched()
      
    }else{
      
     console.log(this.authForm.value);
     this.isloading=true
     this.authenticationService.login(this.authForm.value).subscribe({
      next:(res)=>{
        console.log(res);
      
        if(res.message=='success'){
          this.authenticationService.saveToken(res.token)
          this.router.navigate(['/home'])
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


