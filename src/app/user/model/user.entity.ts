export class User {
  id: number;
  username: string;
  name: string;
  lastname: string;
  email: string;
  dni: string;
  password: string;
  document: string;
  consultation: number;
  services: number;
  subscriptions: number;
  state: string;
  userType: string; // 'student' or 'doctor'
  university?: string; // Optional property for students

  constructor() {
    this.id = 0;
    this.username = '';
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.dni = '';
    this.password = '';
    this.document = '';
    this.consultation = 0;
    this.services = 0;
    this.subscriptions = 0;
    this.state = '';
    this.userType = ''; // Initialize with an empty string
  }
}
