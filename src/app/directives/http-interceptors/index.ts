import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AuthInterceptor} from "./auth-interceptor";

// Automatycznie dodaje nagłówek Authorization: tam, gdzie jest to potrzebne
export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
