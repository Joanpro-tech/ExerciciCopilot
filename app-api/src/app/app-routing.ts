import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { DateKeeperComponent } from './date-keeper/date-keeper.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent },
  { path: 'datekeeper', component: DateKeeperComponent }
];
