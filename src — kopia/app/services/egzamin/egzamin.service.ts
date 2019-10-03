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

    return this.http.post<Egzamin[]>('http://localhost:8000/egzamin', {}, {
      headers: {
        Authorization: token
      }
    });
  }

  public getPytania(idEgzaminu): Observable<Pytanie[]> {
    let token = localStorage.getItem('token');

    return this.http.post<Pytanie[]>(`http://localhost:8000/egzamin/${idEgzaminu}/pytania`, {}, {
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
  tresc: string;
  kategoria: string;
}