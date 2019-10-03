import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        FooterComponent
    ],
    exports: [
        FooterComponent
    ]
})
class FooterBoxModule {
}

export { FooterComponent, FooterBoxModule };