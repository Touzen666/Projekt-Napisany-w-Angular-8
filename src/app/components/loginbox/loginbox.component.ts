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
  is_logged_in: boolean;
  is_bad_password: boolean = false;

  constructor(private loginService: LoginService) {
  }
//w momecie zainicjowania komponentu do

// zmiennej pobierana jest informacja czy w localStorage znajduje sie ta zmienna
  ngOnInit() {
    this.is_logged_in = this.loginService.isLoggedIn();
  }

//metody wywolywane po kliknieciu przyciskow
  login($event) {
    $event.preventDefault();
    this.loginService.login(this.username, this.password, () => (this.is_logged_in = true, this.is_bad_password = false),
      () => (this.is_bad_password = true));
  }

  logout($event) {
    this.loginService.logout();
    this.is_logged_in = false;
    this.is_bad_password = false;
    $event.preventDefault();
  }

}
