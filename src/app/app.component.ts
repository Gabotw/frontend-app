import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MedicDefense';
  options = [
    { path: '/abogados', title: 'Abogados'},
    { path: '/summary', title: 'Resumen'},
    { path: '/suscripcion', title: 'Suscripcion'},
    { path: '/perfil', title: 'Perfil'},
    { path: '/editar-perfil'},
    { path: '/landingPage', title: 'LandingPage'},
  ]
  constructor(private router: Router) {}
  shouldShowToolbar(){
    return !(this.router.url == '/sign-up' || this.router.url == '/sign-in');
  }
  shouldShowFooter(){
    return this.router.url !== '/sign-up' && this.router.url !== '/sign-in';
  }
}

