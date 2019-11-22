//main.ts is to bootstrap the application. It loads everything and controls the startup of the application.

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//HammerJS is a popular library that helps you add support for touch gestures (e.g. swipe, pan, zoom, rotate) to your page
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
