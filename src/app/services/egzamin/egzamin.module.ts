import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EgzaminService, Egzamin } from './egzamin.service';

@NgModule({
    declarations: [
      EgzaminService
    ],
    providers: [
      EgzaminService
    ],
    imports: [
        HttpClientModule
    ],
    exports: [
      EgzaminService
    ]
})
class EgzaminServiceModule {
}

export { EgzaminService, EgzaminServiceModule, Egzamin };
