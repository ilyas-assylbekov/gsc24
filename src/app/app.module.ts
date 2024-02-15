import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(
      {"projectId":"gsc24-57103",
      "appId":"1:221195242542:web:5acaca4ef0f8e1b4bd23bf",
      "databaseURL":"https://gsc24-57103-default-rtdb.firebaseio.com",
      "storageBucket":"gsc24-57103.appspot.com",
      // "locationId":"us-central",
      "apiKey":"AIzaSyDnJuqjvj4rgdpmXLxI4upwpSnOlsBdY7Q",
      "authDomain":"gsc24-57103.firebaseapp.com",
      "messagingSenderId":"221195242542",
      "measurementId":"G-Z9NX0L5HBC"
    })),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideAppCheck(() => {
      // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      const provider = new ReCaptchaEnterpriseProvider("6LeI2nMpAAAAAH6ORY4fgznytlBFG1Yl4IIuWqCQ");
      return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    }),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig())
  ],
  providers: [
    provideClientHydration(),
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
