import { Component } from '@angular/core';
import { EgzaminService, Egzamin } from '../services/egzamin/egzamin.module';

@Component({
    selector: 'oferty-page',
    templateUrl: './oferty.html',
    styleUrls: ['./oferty.component.scss'],
    providers: [
        EgzaminService
    ]
})
export class OfertyPracyPage {
    constructor(private egzaminService: EgzaminService) { }

    private egzaminy: Egzamin[];

    ngOnInit() {
        this.egzaminService.getEgzaminy().subscribe(data => (this.egzaminy = data));
    }
}