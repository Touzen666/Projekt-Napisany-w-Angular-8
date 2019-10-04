import {Directive, Injectable} from '@angular/core'

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable()
@Directive({
  selector: 'user-service'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getCurrentPracownik(): Observable<Pracownik> {

    return this.http.post<Pracownik>(`/v1/pracownicy/current`, {});
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
