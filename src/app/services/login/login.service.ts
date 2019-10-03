import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

interface ReturnToken {
  token: string;
}

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

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

