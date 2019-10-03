import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.module';

@Component({
    selector: 'login-box',
    templateUrl: './loginbox.html',
    styleUrls: ['./loginbox.component.scss'],
    providers: [
        LoginService
    ]
})
export class LoginBoxComponent implements OnInit {

    constructor(private loginService: LoginService) {}

    username: string;
    password: string;
    is_logged_in: boolean;
//w momecie zainicjowania komponentu do
// zmiennej pobierana jest informacja czy w localStorage znajduje sie ta zmienna
    ngOnInit() {
        this.is_logged_in = (localStorage.getItem('token') != undefined);
    }
//metody wywolywane po kliknieciu przyciskow
    login() {
        this.loginService.login(this.username, this.password, () => (this.is_logged_in = true));
    }

    logout() {
        this.loginService.logout();
        this.is_logged_in = false;
    }

}