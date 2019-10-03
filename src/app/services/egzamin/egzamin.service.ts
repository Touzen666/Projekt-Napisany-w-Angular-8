import { Injectable, Directive } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
@Directive({
  selector: 'egzamin-service'
})
export class EgzaminService {
  constructor(private http: HttpClient) { }

  public getEgzaminy(): Observable<Egzamin[]> {
    let token = localStorage.getItem('token');

    return this.http.post<Egzamin[]>('/v1/egzamin', {}, {
      headers: {
        Authorization: token
      }
    });
  }

  public getPytania(idEgzaminu): Observable<Pytanie[]> {
    let token = localStorage.getItem('token');

    return this.http.post<Pytanie[]>(`/v1/egzamin/${idEgzaminu}/pytania`, {}, {
      headers: {
        Authorization: token
      }
    });
  }


  public getOdpowiedzi(idEgzaminu): Observable<Odpowiedz[]> {
    let token = localStorage.getItem('token');

    return this.http.post<Odpowiedz[]>(`/v1/egzamin/${idEgzaminu}/odpowiedzi`, {}, {
      headers: {
        Authorization: token
      }
    });
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
