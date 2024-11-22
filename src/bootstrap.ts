// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { TRANSLATIONS_FORMAT } from '@angular/core';
// import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';

// platformBrowserDynamic().bootstrapModule(AppModule, {
//   providers: [
//     { provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
//   ],
// })
//   .catch(err => console.log(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
