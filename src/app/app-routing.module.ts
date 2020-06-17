import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from '../app/shared/guard/auth.guard';
import { InnerPagesGuard } from '../app/shared/guard/inner-pages-guard.guard'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [InnerPagesGuard] },
  { path: 'app', component: TodoComponent, canActivate: [AuthGuard] },
  { path: 'register', component:  RegisterComponent, canActivate: [InnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
