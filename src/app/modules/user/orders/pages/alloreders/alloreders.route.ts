import { Routes } from "@angular/router";


export const ALLORDER_ROUTES:Routes =[
    

    {path:'allorders',loadComponent:()=>import('../alloreders/alloreders.component').then((c)=>c.AlloredersComponent),title:'Address'}
  
]