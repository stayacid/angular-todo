import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.genForm();
  }

  genForm() {
    const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passRegex: RegExp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,16}$/;
    this.registerForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(emailRegex),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(passRegex),
        Validators.minLength(8),
        Validators.maxLength(16)
      ]),
    });
  }
}
