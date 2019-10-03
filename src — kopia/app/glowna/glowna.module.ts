import { StronaGlownaPage } from './glowna.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        StronaGlownaPage
    ],

    exports: [
        StronaGlownaPage
    ]
})
class StronaGlownaModule {
}

export { StronaGlownaPage, StronaGlownaModule };