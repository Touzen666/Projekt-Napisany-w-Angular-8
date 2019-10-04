import {Component} from '@angular/core';
import {Egzamin, EgzaminService} from '../services/egzamin/egzamin.module';

@Component({
  selector: 'oferty-page',
  templateUrl: './oferty.html',
  styleUrls: ['./oferty.component.scss'],
  providers: [
    EgzaminService
  ]
})
export class OfertyPracyPage {
  private egzaminy: Egzamin[];

  constructor(private egzaminService: EgzaminService) {
  }

  public getEgzaminy(): Egzamin[] {
    return this.egzaminy;
  }

  ngOnInit() {
    this.egzaminService.getEgzaminy().subscribe(data => (this.egzaminy = data));
  }
}
