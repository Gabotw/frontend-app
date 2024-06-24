import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {AuthenticationService} from "../../services/authentication.service";
import {SignUpRequest} from "../../model/sign-up.request";
import {Router} from "@angular/router";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent extends BaseFormComponent implements OnInit{
  submitted = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService)
  {
    super();
  }
  ngOnInit(): void {
  }
  password: any;
  name: any;
  lastName: any;
  email: any;
  dni: any;
  phoneNumber: any;
  repeat_password: any;
  userType: any;
  university: any;
  profilePicture: string | null = null;
  profilePicturePreview: string | ArrayBuffer | null = null;
  role: any;

  goToLogin() {
    this.router.navigateByUrl('/sign-in');
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicture = reader.result as string;
        this.profilePicturePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  register() {
    let username = this.email;
    let password = this.password;
    let name = this.name;
    let lastName = this.lastName;
    let email = this.email;
    let dni = this.dni;
    let phoneNumber = this.phoneNumber;
    let userType = this.userType;
    let university = this.university;
    let role = this.role;
    if (this.profilePicture) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result)
        console.log("ya ando aca")
        console.log(phoneNumber)
        let imgUrl = reader.result as string;
        if(userType == 'doctor') {
          role = "ROLE_MEDIC";
          university = "";
          // const signUpRequest = new TryRequest(username, password);
          const signUpRequest = new SignUpRequest(
            username,
            password,
            name,
            lastName,
            email,
            phoneNumber,
            dni,
            imgUrl,
            university,
            role
          );
          this.authenticationService.signUp(signUpRequest);
          this.submitted = true;
        }
        if(userType == 'student') {
          role = "ROLE_MEDIC_STUDENT";
          const signUpRequest = new SignUpRequest(
            username,
            password,
            name,
            lastName,
            email,
            phoneNumber,
            dni,
            imgUrl,
            university,
            role
          );
          this.authenticationService.signUp(signUpRequest);
          this.submitted = true;
        }
      };
    } else {
      let imgUrl = "nohay:(";
      if(userType == 'doctor') {
        console.log("ya ando aca")
        console.log(phoneNumber)
        role = "ROLE_MEDIC";
        university = "";
        // const signUpRequest = new TryRequest(username, password);
        const signUpRequest = new SignUpRequest(
          username,
          password,
          name,
          lastName,
          email,
          phoneNumber,
          dni,
          imgUrl,
          university,
          role
        );
        console.log(signUpRequest);
        this.authenticationService.signUp(signUpRequest);
        this.submitted = true;
      }
      if(userType == 'student') {
        role = "ROLE_MEDIC_STUDENT";
        const signUpRequest = new SignUpRequest(
          username,
          password,
          name,
          lastName,
          email,
          phoneNumber,
          dni,
          imgUrl,
          university,
          role
        );
        this.authenticationService.signUp(signUpRequest);
        this.submitted = true;
      }
    }
    this.router.navigateByUrl('/sign-in');
  }
}
