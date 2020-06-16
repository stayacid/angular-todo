import { Component, NgZone } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Spectacular Angular todo app';
  constructor(
    public authService: AuthService,
    public router: Router, // do i need this?
    public ngZone: NgZone // do i need this?
  ) {}
}
