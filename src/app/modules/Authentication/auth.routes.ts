import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { AuthenticationLayoutComponent } from "../../layouts/authentication-layout/authentication-layout.component";

export const AUTH_ROUTS:Routes=[
    
  {

    path:'',component:AuthenticationLayoutComponent,
    children:[
      
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',loadComponent:()=>import('./pages/login/login.component').then((c)=>c.LoginComponent),title:"Login"},
      {path:'register',loadComponent:()=>import('./pages/register/register.component').then((c)=>c.RegisterComponent),title:"register"},
      {path:'forget-password',loadComponent:()=>import('./pages/forget-password/forget-password.component').then((c)=>c.ForgetPasswordComponent),title:"Forget Password"},
      {path:'verify-code',loadComponent:()=>import('./pages/verify-code/verify-code.component').then((c)=>c.VerifyCodeComponent),title:"Verify Code"},
      {path:'reset-password',loadComponent:()=>import('./pages/reset-password/reset-password.component').then((c)=>c.ResetPasswordComponent),title:"Verify Code"},
      
    
    ]

  }
]










































