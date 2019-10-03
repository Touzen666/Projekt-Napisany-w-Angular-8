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
    return this.http.post<ReturnToken>('http://localhost:8000/login', {
      username: login,
      password: password
    }).subscribe(function (request: ReturnToken) {
      localStorage.setItem('token', request.token);
      on_success();
    });
  }

  public logout() {
    localStorage.removeItem('token');
  }
}