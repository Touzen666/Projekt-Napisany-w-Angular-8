import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationModule} from './registration/registration.module';
import {StronaGlownaModule} from './glowna/glowna.module';
import {KontaktModule} from './kontakt/kontakt.module';
import {OfertyModule} from './oferty/oferty.module';
import {EgzaminModule} from './egzamin/egzamin.module';
import {KontoModule} from './konto/konto.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginBoxModule} from './components/loginbox/loginbox.module';
import {FooterBoxModule} from './components/footerbox/footer.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {LoginServiceModule} from "./services/login/login.module";
import {httpInterceptorProviders} from "./directives/http-interceptors/index";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    StronaGlownaModule,
    KontaktModule,
    OfertyModule,
    EgzaminModule,
    KontoModule,
    LoginBoxModule,
    FooterBoxModule,
    RouterModule,
    EgzaminModule,
    LoginServiceModule,
    NgbModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
