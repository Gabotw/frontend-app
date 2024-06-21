export class Profile {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  DNI: string;
  img_url: string;

  constructor() {
    this.id = 0;
    this.fullName = '';
    this.email = '';
    this.phoneNumber = '';
    this.DNI = '';
    this.img_url = '';
  }
}
