import { Injectable, Component, Directive } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

interface ReturnToken {
  token: string;
}

@Injectable()
@Directive({
  selector: 'login-service'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  public getToken(): string|undefined {
    return localStorage.getItem('token');
  }

  // Zwróć gotowe optionsy dla innych wywołań
  public getOptions(): object {
    return {
      headers: {
        Authorization: this.getToken()
      }
    };
  }

  public login(login: string, password: string, on_success: any): any {
    return this.http.post<ReturnToken>('/v1/login', {
      username: login,
      password: password
    }).subscribe(function (request: ReturnToken) {
      localStorage.setItem('token', request.token);

      on_success();
      location.reload();
    });

  }

  public logout() {
    localStorage.removeItem('token');
    location.reload();

  }
  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }
}

