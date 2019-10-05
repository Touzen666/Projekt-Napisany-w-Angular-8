import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login/login.module';

@Component({
  selector: 'login-box',
  templateUrl: './loginbox.html',
  styleUrls: ['./loginbox.component.scss'],
  providers: [
    LoginService
  ]
})
export class LoginBoxComponent implements OnInit {

  username: string;
  password: string;
  isLoggedIn: boolean;
  isBadPassword: boolean = false;

  constructor(private loginService: LoginService) {
  }
//w momecie zainicjowania komponentu do

// zmiennej pobierana jest informacja czy w localStorage znajduje sie ta zmienna
  ngOnInit() {
    this.isLoggedIn = this.loginService.isLoggedIn();
  }

//metody wywolywane po kliknieciu przyciskow
  login($event) {
    $event.preventDefault();
    this.loginService.login(this.username, this.password, () => (this.isLoggedIn = true, this.isBadPassword = false),
      () => (this.isBadPassword = true));
  }

  logout($event) {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.isBadPassword = false;
    $event.preventDefault();
  }

}
