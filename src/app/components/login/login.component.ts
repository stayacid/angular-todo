import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // public loginForm: FormGroup;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
