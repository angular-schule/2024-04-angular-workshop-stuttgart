import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Test } from './Test';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));




// Playground


const test = new Test(42);
