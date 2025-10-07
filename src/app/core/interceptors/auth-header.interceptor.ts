import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from '../../modules/Authentication/services/authentication.service';

export const authHeaderInterceptor: HttpInterceptorFn = (req, next) => {

  const authService=inject(AuthenticationService)
  const token=authService.getToken()

  if(token){
    req=req.clone({
      setHeaders:{token}
    })
  }

  
  return next(req);
};
