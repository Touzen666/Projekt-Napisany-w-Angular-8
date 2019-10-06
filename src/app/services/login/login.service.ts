import {Directive, Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

interface ReturnToken {
  token: string;
}

@Injectable()
@Directive({
  selector: 'login-service'
})
export class LoginService {
  constructor(private http: HttpClient) {
  }

  public getToken(): string | undefined {
    return localStorage.getItem('token');
  }

  public login(login: string, password: string, on_success: any, on_failure: any): any {
    return this.http.post<ReturnToken>('/v1/login', {
      username: login,
      password: password
    }).subscribe(function (request: ReturnToken) {
      localStorage.setItem('token', request.token);

      on_success();
      location.reload();
    }, on_failure);

  }

  public logout() {
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    return (!!localStorage.getItem('token'));
  }
}

