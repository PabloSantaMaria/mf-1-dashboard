import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, TRANSLATIONS_FORMAT } from '@angular/core';
import { provideRouter, RouterModule, withComponentInputBinding } from '@angular/router';

import { routes_dashboard } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
    importProvidersFrom(
      BrowserModule,
      RouterModule
    ),
    provideRouter(
      routes_dashboard,
      withComponentInputBinding()
    ),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
  ],
};
