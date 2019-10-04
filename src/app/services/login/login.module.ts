import { LoginService } from './login.service';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
      LoginService,
    ],
    providers: [
        LoginService,
    ],
    imports: [
        HttpClientModule
    ],
    exports: [
        LoginService
    ]
})
class LoginServiceModule {
}

export { LoginService, LoginServiceModule };
