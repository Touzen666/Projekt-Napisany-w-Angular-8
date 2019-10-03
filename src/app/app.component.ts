import { Component } from '@angular/core';
import { LoginService } from './services/login/login.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    LoginService
  ]
})
export class AppComponent {
  constructor(private loginService: LoginService) { }

  title = 'outsourcing-pl-app';
}
