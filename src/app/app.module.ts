import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './pages/HomePage/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { environment } from './../environments/environment';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { DiscoverPageComponent } from './pages/discover-page/discover-page.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

import { HttpClientModule } from '@angular/common/http';
import { GptComponent } from './components/gpt/gpt.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    NavigationComponent,
    HomeMainComponent,
    DiscoverPageComponent,
    LogInPageComponent,
    SearchPageComponent,
    GptComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp( environment.firebase ) ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),
  ],
  providers: [
    provideClientHydration(),
    ScreenTrackingService,
    UserTrackingService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
