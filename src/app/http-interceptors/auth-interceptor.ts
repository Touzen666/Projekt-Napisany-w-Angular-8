import { LoginService } from "../services/login/login.service";
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
// Klasa która automatycznie przyczepi nagłówek Authorization do odpowiedniego żądania
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Jeśli to logowanie albo rejestracja to je zostaw
    if (req.url.endsWith('/v1/login') || (req.url.endsWith('/v1/register'))) {
      return next.handle(req);
    } else {
      // W przeciwnym razie postaraj sie dodac nagłówek uwierzytelniający
      let token: string|undefined = this.loginService.getToken();
      if (token === undefined) {
        this.loginService.logout();
      }
      const authReq = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      return next.handle(authReq);
    }
  }
}
