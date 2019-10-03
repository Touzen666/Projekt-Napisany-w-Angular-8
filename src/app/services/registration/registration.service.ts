import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class RegistrationService {
  constructor(private http: HttpClient) {
  }

  public register(imie: string, nazwisko: string, email: string,
                  adres: string, dataurodzenia: string, login: string, haslo: string): any {
    return this.http.post('/v1/register', {
      imie: imie,
      nazwisko: nazwisko,
      email: email,
      adres: adres,
      dataurodzenia: dataurodzenia,
      login: login,
      haslo: haslo

    }).subscribe();
  }
}
