import {NgModule} from '@angular/core';
import {OfertyPracyPage} from './oferty.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    OfertyPracyPage
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    OfertyPracyPage
  ]
})
export class OfertyModule {
}

export {OfertyPracyPage};
