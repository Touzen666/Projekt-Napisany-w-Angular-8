import {Directive, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
@Directive({
  selector: 'egzamin-service'
})
export class EgzaminService {
  constructor(private http: HttpClient) {
  }

  public getEgzaminy(): Observable<Egzamin[]> {
    return this.http.post<Egzamin[]>('/v1/egzamin', {});
  }

  public getPytania(idEgzaminu): Observable<Pytanie[]> {
    return this.http.post<Pytanie[]>(`/v1/egzamin/${idEgzaminu}/pytania`, {});
  }

  public getOdpowiedzi(idEgzaminu): Observable<Odpowiedz[]> {
    return this.http.post<Odpowiedz[]>(`/v1/egzamin/${idEgzaminu}/odpowiedzi`, {});
  }
}

export interface Egzamin {
  idEgzaminu: number;
  czasRozpoczecia: string;
  czasZakonczenia: string;
  idStanowisko: string;
  idTworcyEgzaminu: string;
  nazwa: string;
}

export interface Pytanie {
  idPytania: number;
  tresc: string;
  kategoria: string;
}

export interface Odpowiedz {
  idPytania: number;
  idOdpowiedzi: number;
  odpowiedz: string;
}
