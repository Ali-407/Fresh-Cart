import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../../modules/Authentication/services/authentication.service';

export const isAuthGuard: CanActivateFn = (route, state) => {
  const authenticationService=inject (AuthenticationService)
  const router =inject(Router)
  
  if(authenticationService. islogin()){
    return true;

  }else{
    router.navigate(['./login'])
    return false;
  }
  
};
