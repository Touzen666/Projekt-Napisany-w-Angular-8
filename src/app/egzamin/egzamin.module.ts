import { EgzaminPage } from './egzamin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxModule } from '../components/loginbox/loginbox.module';
import { FooterBoxModule } from '../components/footerbox/footer.module';
import { EgzaminServiceModule } from '../services/egzamin/egzamin.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        EgzaminPage
    ],
    imports: [
        CommonModule,
        LoginBoxModule,
        FooterBoxModule,
        EgzaminServiceModule,
        RouterModule,
        NgbModule
    ],
    exports: [
        EgzaminPage
    ]
})
class EgzaminModule {
}

export { EgzaminPage, EgzaminModule };
