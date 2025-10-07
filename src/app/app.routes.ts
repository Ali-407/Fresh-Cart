import { Routes } from '@angular/router';
import { isAuthGuard } from './core/guards/is-auth.guard';
import { isLoggedInGuard } from './core/guards/is-logged-in.guard';
export const routes: Routes = [
    

    
    {
        path:'',
        loadChildren:()=>import('./modules/user/user.routes')
        .then((m)=>m.USER_ROUTES),
        canActivate:[isAuthGuard]
    },



    {
        path:'',
        loadChildren:()=>import('./modules/Authentication/auth.routes')
        .then((m)=>m.AUTH_ROUTS),
        canActivate:([isLoggedInGuard])
    },

  


      {
        path:'',
        loadChildren:()=>import('./modules/user/products/products.routes')
        .then((m)=>m.PRODUCT_ROUTES),
        canActivate:[isAuthGuard]
    },

    



    {
        path:'**',
        loadComponent:()=>import('./shared/components/not-found/not-found.component').then((c)=>c.NotFoundComponent)
    }

];
