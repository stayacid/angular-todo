import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// material components
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// app components
import { AppComponent } from './app.component';
import {
  TodosComponent,
  DialogComponent,
} from './components/todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

//auth
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './components/todo/todo.component';

const firebaseConfig = {
  apiKey: "AIzaSyDGX8jfeiFVmqzS-AmXXtjSoOBNQ29Knlk",
  authDomain: "angular-todo-c6252.firebaseapp.com",
  databaseURL: "https://angular-todo-c6252.firebaseio.com",
  projectId: "angular-todo-c6252",
  storageBucket: "angular-todo-c6252.appspot.com",
  messagingSenderId: "169983727754",
  appId: "1:169983727754:web:fb62b87a91cfaa741f3573"
};

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    LoginComponent,
    TodoComponent,
    TodoFormComponent,
    TodosComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, DialogComponent],
})
export class AppModule {}
