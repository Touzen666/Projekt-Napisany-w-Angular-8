import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationService} from './registration.service';

@NgModule({
  declarations: [
    RegistrationService
  ],
  providers: [
    RegistrationService
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    RegistrationService
  ]
})
class RegistrationModule {
}

export {RegistrationService, RegistrationModule};
