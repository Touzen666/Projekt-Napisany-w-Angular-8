import {LoginBoxComponent} from './loginbox.component';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
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
