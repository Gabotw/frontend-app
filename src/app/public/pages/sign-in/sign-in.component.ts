import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  correo_electronico: any;
  contrasena: any;
  constructor(private router: Router){}
  goToRegister(){
    this.router.navigateByUrl('/sign-up');
  }
  login() {
    console.log('Usuario autenticado');
    this.router.navigateByUrl('/abogados');
  }
}
