import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../core/auth.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {

  constructor(public auth: AuthService,
    private router: Router) { }



async signInWithGoogle() {
await this.auth.googleLogin();
return await this.afterSignIn();
}

/// Shared
private afterSignIn() {
// Do after login stuff here, such router redirects, toast messages, etc.
return this.router.navigate(['/']);
}

}