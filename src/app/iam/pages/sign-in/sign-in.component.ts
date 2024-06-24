import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SignInRequest} from "../../model/sign-in.request";
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent extends BaseFormComponent implements OnInit{
  email: any;
  password: any;
  submitted = false;

  constructor(private router: Router, private builder: FormBuilder, private authenticationService: AuthenticationService) {
    super();
  }
  ngOnInit(): void {
  }

  goToRegister(){
    this.router.navigateByUrl('/sign-up');
  }
  login() {
    let username = this.email;
    let password = this.password;
    const signInRequest = new SignInRequest(username, password);
    this.authenticationService.signIn(signInRequest);
    this.submitted = true;
  }
}
