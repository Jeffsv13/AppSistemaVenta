import { ApplicationConfig, NgModule, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './Reutilizable/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(),
  importProvidersFrom(HttpClientModule)]
};

/*@NgModule({
  imports:[SharedModule]
})
export class app { }*/
