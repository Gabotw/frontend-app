export class Profile {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  dni: string;
  img_url: string;

  constructor() {
    this.id = 0;
    this.fullName = '';
    this.email = '';
    this.phoneNumber = '';
    this.dni = '';
    this.img_url = '';
  }
}
