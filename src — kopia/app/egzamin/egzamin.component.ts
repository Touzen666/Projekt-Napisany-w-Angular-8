import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EgzaminService } from '../services/egzamin/egzamin.module';
import { Pytanie } from '../services/egzamin/egzamin.service';


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

    private pytania: Pytanie[];

    ngOnInit() {
        let idEgzaminu = this.activatedRoute.snapshot.params['id'];

        this.egzaminService.getPytania(idEgzaminu).subscribe(data => (this.pytania = data));
    }

}