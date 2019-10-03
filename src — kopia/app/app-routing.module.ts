import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationPage } from './registration/registration.module';
import { StronaGlownaPage } from './glowna/glowna.module';
import { KontaktPage } from './kontakt/kontakt.module';
import { OfertyPracyPage } from './oferty/oferty.module';
import { EgzaminPage } from './egzamin/egzamin.module';
import { KontoPage } from './konto/konto.module';


const routes: Routes = [
  { path: 'registration', component: RegistrationPage },
  { path: 'oferty', component: OfertyPracyPage },
  { path: 'kontakt', component: KontaktPage },
  { path: 'egzamin/:id', component: EgzaminPage },
  { path: 'konto', component: KontoPage },
  { path: '**', component: StronaGlownaPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
