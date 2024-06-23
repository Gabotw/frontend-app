import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../user/model/user.entity';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  name = '';
  lastName = '';
  email = '';
  dni = '';
  password = '';
  repeat_password = '';
  userType = '';  // 'student' or 'doctor'
  university = '';
  placeOfWork = '';
  profilePicture: File | null = null;
  profilePicturePreview: string | ArrayBuffer | null = null;

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigateByUrl('/sign-in');
  }

  onFileSelected(event: any) {
    this.profilePicture = event.target.files[0];
    if (this.profilePicture) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicturePreview = reader.result;
      };
      reader.readAsDataURL(this.profilePicture);
    }
  }

  register() {
    console.log('User Registered');
    const user = new User();
    user.name = this.name;
    user.lastname = this.lastName;
    user.email = this.email;
    user.dni = this.dni;
    user.password = this.password;
    user.userType = this.userType;
    if (this.userType === 'student') {
      user.university = this.university;
    }
    console.log(user);
      this.router.navigateByUrl('/sign-in');
  }
}
