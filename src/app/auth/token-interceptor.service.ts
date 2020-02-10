import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthRequestService } from './auth-request.service'



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next){
    let ars = this.injector.get(AuthRequestService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${ars.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }

}
