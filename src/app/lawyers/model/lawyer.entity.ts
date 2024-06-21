export class Lawyer {
  id: number;
  name: string;
  yearsOfExperience: number;
  specialization: string;
  urlToImage: string;
  casesWon: number;
  price: string;
  email: string;
  phoneNumber: string;
  fullName: string;
  DNI: string;
  profileId: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.yearsOfExperience = 0;
    this.specialization = '';
    this.urlToImage = '';
    this.casesWon = 0;
    this.price = '';
    this.email = '';
    this.phoneNumber = '';
    this.fullName = '';
    this.DNI = '';
    this.profileId = 0;
  }
}
