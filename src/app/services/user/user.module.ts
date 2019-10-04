import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from "./user.service";

@NgModule({
  declarations: [
    UserService
  ],
  providers: [
    UserService,
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    UserService
  ]
})
class UserModule {
}

export {UserService, UserModule};
