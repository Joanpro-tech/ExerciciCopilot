import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync(),
    importProvidersFrom(
      BrowserAnimationsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatInputModule
     )
  ]
}).catch(err => console.error(err));
