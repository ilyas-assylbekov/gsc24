import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo, hasCustomClaim } from "@angular/fire/auth-guard";

import { HomeComponent } from './pages/HomePage/home.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DiscoverPageComponent } from './pages/discover-page/discover-page.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { GptComponent } from './components/gpt/gpt.component';
import { ProfileComponent } from './pages/profile/profile.component';

const adminOnly = () => hasCustomClaim( "admin" );
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo( ["login"] );
const redirectLoggedInToHome = () => redirectLoggedInTo([""]);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchPageComponent, canActivate: [ AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'discover', component: DiscoverPageComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'login', component: LogInPageComponent },
  { path: 'gemini', component: GptComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
