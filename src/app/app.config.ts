import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideFirebaseApp,initializeApp} from '@angular/fire/app';
import {provideAuth,getAuth} from '@angular/fire/auth'
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const firebaseConfig = {
  apiKey: "AIzaSyC5Apk7Gy_bI-2nDo75w7WlVCDJhknOmqM",
  authDomain: "angular-firebase-app-5fdc6.firebaseapp.com",
  projectId: "angular-firebase-app-5fdc6",
  storageBucket: "angular-firebase-app-5fdc6.firebasestorage.app",
  messagingSenderId: "225341130530",
  appId: "1:225341130530:web:3220f117a40237dff7877b",
  measurementId: "G-R9GHSPKV3Y"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideFirebaseApp(()=>initializeApp(firebaseConfig)),
    provideAuth(()=>getAuth())
  
  ]
};
