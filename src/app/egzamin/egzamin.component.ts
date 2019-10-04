import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EgzaminService } from '../services/egzamin/egzamin.module';
import { Pytanie, Odpowiedz, Egzamin } from '../services/egzamin/egzamin.service';


@Component({
    selector: 'egzamin-page',
    templateUrl: './egzamin.html',
    styleUrls: ['./egzamin.component.scss'],
    providers: [
        EgzaminService
    ]
})
export class EgzaminPage implements OnInit {
    constructor(private egzaminService: EgzaminService, private activatedRoute: ActivatedRoute) { }

    // Skoro to są zmienne prywatne i chcesz się do nich dossać z poziomu egzamin.html to chociaż porób settery!
    private egzamin: Egzamin;
    private pytania: Pytanie[];
    private odpowiedzi: { [index: number]: Odpowiedz[] };

    public getPytania(): Pytanie[] {
      return this.pytania;
    }
    public getEgzamin(): Egzamin {
      return this.egzamin;
    }
    public getOdpowiedzi(): { [index: number]: Odpowiedz[] } {
      return this.odpowiedzi;
    }
    // co artysta miał na myśli? Ponoć wysyła zatwierdzoną odpowiedź. Ale czym tutaj jest Event?
    public register(event: Event) {
      console.log("Zarejestrowano odpowiedź na pytanie!");
      throw new Error('Zaimplementuj mnie!');
    }


    ngOnInit() {    // przy zmiennych w TypeScript staramy się oznaczać ich typy
        let idEgzaminu: number = this.activatedRoute.snapshot.params['id'];

        this.egzaminService.getEgzaminy().subscribe(data => (this.egzamin = data.find(el => el.idEgzaminu == idEgzaminu)));

        this.egzaminService.getPytania(idEgzaminu).subscribe(data => {
            this.pytania = data;
            console.log(this.pytania)
        });
        this.egzaminService.getOdpowiedzi(idEgzaminu).subscribe(data => {
            console.log("before", data)

            this.odpowiedzi = {};
            data.forEach((odpowiedz: Odpowiedz) => {
                if (!this.odpowiedzi[odpowiedz.idPytania]) {
                    this.odpowiedzi[odpowiedz.idPytania] = []
                }
                this.odpowiedzi[odpowiedz.idPytania].push(odpowiedz);
            })

            console.log("after", this.odpowiedzi)
        });

    }

}
