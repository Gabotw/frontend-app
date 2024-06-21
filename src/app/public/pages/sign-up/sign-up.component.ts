import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../../user/model/user.entity";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  name = '';
  lastName= '';
  email = '';
  dni = '';
  password = '';
  repeat_password = '';

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigateByUrl('/sign-in');
  }
  register() {
    console.log('Usuario registrado');
    const user = new User();
    user.name = this.name;
    user.lastname = this.lastName;
    user.email = this.email;
    user.dni = this.dni;
    user.password = this.password;
    console.log(user);
    this.router.navigateByUrl('/sign-in');
  }
}
