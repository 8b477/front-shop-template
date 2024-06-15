import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PannierComponent } from './pages/pannier/pannier.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'shop', title: 'Shop', component: ShopComponent },
  { path: 'pannier', title: 'Pannier', component: PannierComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'register', title: 'Register', component: RegisterComponent },

  { path: '**', title: 'Not-found', component: NotFoundComponent },
];
