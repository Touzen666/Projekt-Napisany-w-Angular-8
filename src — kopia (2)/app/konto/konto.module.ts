import { KontoPage } from './konto.component';
import { NgModule } from '@angular/core';
import { LoginBoxModule } from '../components/loginbox/loginbox.module';
import { FooterBoxModule } from '../components/footerbox/footer.module';

@NgModule({
    declarations: [
        KontoPage
    ],
    imports: [
        LoginBoxModule,
        FooterBoxModule
    ],
    exports: [
        KontoPage
    ]
})
class KontoModule {
}

export { KontoPage, KontoModule };