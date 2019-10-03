import { Component, OnInit } from '@angular/core';
import { Pracownik, UserService } from '../services/user/user.service';

@Component({
    selector: 'konto-page',
    templateUrl: './konto.html',
    styleUrls: ['./konto.component.scss'],
    providers: [
        UserService
    ]
})

export class KontoPage implements OnInit {
    constructor(private userService: UserService) { }
    private user: Pracownik;
    //  = {
    //     idPracownik: 1,
    //     imie: "Brtek",
    //     nazwisko: "fhjdhf",
    //     dataUrodzenia: "2017-01-01",
    //     login: "string",
    //     haslo: "tajnehaslo",
    //     email: "string@example.com",
    // };

    ngOnInit(): void {
        this.userService.getCurrentPracownik().subscribe(data => (this.user = data));
    }
}