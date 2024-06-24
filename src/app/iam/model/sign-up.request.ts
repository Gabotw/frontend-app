export class SignUpRequest {
  constructor(
    public username: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
    public DNI: string,
    public image_url: string,
    public university: string,
    public role: string
  ) {}
}
