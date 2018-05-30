import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from './core/auth.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedIn: boolean;

  constructor(private auth: AuthService) { }

  logout() {
    this.auth.signOut();
  }
}
