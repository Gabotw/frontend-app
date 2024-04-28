import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User} from "../../../user/model/user.entity";
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit{
  user: User = new User();
  selectedLink: string | undefined;
  fileName: string | undefined;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
  }

  selectLink(s: string) {

  }

  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      this.fileName = fileList[0].name;  // Actualiza el nombre del archivo
    } else {
      this.fileName = 'Ningún archivo seleccionado';  // Restablece si no hay archivo seleccionado
    }
  }
}
