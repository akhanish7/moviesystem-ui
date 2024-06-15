import {Component, NgZone, OnInit} from '@angular/core';
import {CredentialResponse, PromptMomentNotification} from "google-one-tap";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})

export class AuthComponent implements OnInit {
  private isSignInRequestInProgress = false;

  ngOnInit(): void {
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: false
      });

      // Ensure only one request is made
      if (!this.isSignInRequestInProgress) {
        this.isSignInRequestInProgress = true;

        // @ts-ignore
        google.accounts.id.renderButton(
          // @ts-ignore
          document.getElementById("buttonDiv"),
          { theme: "outline", size: 'large', width: '100%' }
        );

        // @ts-ignore
        google.accounts.id.prompt((notification: PromptMomentNotification) => {
          this.isSignInRequestInProgress = false;
        });
      }
    };

    // Ensure the Google library is loaded before calling the window.onGoogleLibraryLoad
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // @ts-ignore
      window.onGoogleLibraryLoad();
    };
    document.head.appendChild(script);
  }

  handleCredentialResponse(response: CredentialResponse) {
    // Handle the response from Google Sign-In
    console.log('Credential Response:', response);
    // Reset the flag after handling the response
    this.isSignInRequestInProgress = false;
  }
}

