import { Component } from '@angular/core';

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
}

