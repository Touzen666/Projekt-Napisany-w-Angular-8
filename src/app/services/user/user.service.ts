import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getCurrentPracownik(): Observable<Pracownik> {

    let token = localStorage.getItem('token');

    return this.http.post<Pracownik>(`http://localhost:8000/pracownicy/current`, {}, {
      headers: {
        Authorization: token
      }
    });
  }
}

export interface Pracownik {
  idPracownik: number;
  imie: string;
  nazwisko: string;
  dataUrodzenia: string;
  login: string;
  haslo: string;
  email: string;

}