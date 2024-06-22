export class Profile {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  dni: string;
  image_url: string;

  constructor() {
    this.id = 0;
    this.fullName = '';
    this.email = '';
    this.phoneNumber = '';
    this.dni = '';
    this.image_url = '';
  }
}
