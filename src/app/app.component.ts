import { Component, Inject } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'gsc24';
  constructor(@Inject(FirebaseApp) private firebaseApp: FirebaseApp) {}

  ngOnInit(): void {
    // Access Firebase app instance here
    console.log('Firebase app:', this.firebaseApp);
  }
}
