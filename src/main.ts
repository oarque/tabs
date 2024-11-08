import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { MenuComponent } from './app/menu/menu.component';
import { routes } from './app/routes';

import 'zone.js';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, { providers: [provideAnimationsAsync(), provideRouter(routes)] });

