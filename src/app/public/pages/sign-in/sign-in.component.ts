import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  email: any;
  password: any;
  constructor(private router: Router){}
  goToRegister(){
    this.router.navigateByUrl('/sign-up');
  }
  login() {
    console.log('User identified');
    this.router.navigateByUrl('/Lawyers');
  }
}
