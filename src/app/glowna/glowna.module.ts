import {StronaGlownaPage} from './glowna.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    StronaGlownaPage
  ],
  imports: [
    RouterModule
  ],
  exports: [
    StronaGlownaPage
  ]
})
class StronaGlownaModule {
}

export {StronaGlownaPage, StronaGlownaModule};
