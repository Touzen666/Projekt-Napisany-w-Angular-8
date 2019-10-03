import { RegistrationPage } from './registration.component';
import { NgModule } from '@angular/core';
import { LoginBoxModule } from '../components/loginbox/loginbox.module';
import { FooterBoxModule } from '../components/footerbox/footer.module';

@NgModule({
    declarations: [
        RegistrationPage
    ],
    imports: [
        LoginBoxModule,
        FooterBoxModule
    ],
    exports: [
        RegistrationPage
    ]
})
class RegistrationModule {
}

export { RegistrationPage, RegistrationModule };
