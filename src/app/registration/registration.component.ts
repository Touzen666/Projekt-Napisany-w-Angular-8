import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration/registration.module';
import { Router } from '@angular/router';

@Component({
    selector: 'registration-page',
    templateUrl: './registration.html',
    styleUrls: ['./registration.component.scss'],
    providers: [
        RegistrationService
    ]
})
export class RegistrationPage {
    constructor(private registrationService: RegistrationService, private router: Router) { }

    imie: string;
    nazwisko: string;
    email: string;
    adres: string;
    dataurodzenia: string;
    login: string;
    haslo: string;

    register($event) {
        console.log("Register");
        this.registrationService.register(this.imie, this.nazwisko,
            this.email, this.adres, this.dataurodzenia, this.login, this.haslo);
        $event.preventDefault();
        this.router.navigate(['/egzamin']);

    }
}