import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.scss'
})
export class LogInPageComponent {
  constructor(private authService: AuthService) {}

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((result) => {
        // User successfully signed in
        console.log(result);
        window.location.href = "http://localhost:4200/profile"
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  }

  signOut() {
    this.authService.signOut();
  }
}
