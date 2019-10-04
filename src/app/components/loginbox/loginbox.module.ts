import {LoginBoxComponent} from './loginbox.component';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    LoginBoxComponent
  ],
  exports: [
    LoginBoxComponent
  ]
})
class LoginBoxModule {
}

export {LoginBoxComponent, LoginBoxModule};
