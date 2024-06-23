import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from "../../../user/model/user.entity";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: User = new User();
  selectedLink: string | undefined;
  fileName: string | undefined;
  profileImage: string | ArrayBuffer | null = localStorage.getItem('profileImage') || "/assets/img/User.png";
  documentFileName: string | undefined;

  @ViewChild('imageUpload') imageUpload!: ElementRef<HTMLInputElement>;
  @ViewChild('documentUpload') documentUpload!: ElementRef<HTMLInputElement>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  selectLink(s: string) {
    this.selectedLink = s;
  }

  onFileSelected(event: Event, type: string): void {
    const element = event.currentTarget as HTMLInputElement;
    const fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      if (type === 'profile') {
        this.fileName = fileList[0].name;
        this.updateImage(fileList[0]);
      } else if (type === 'document') {
        this.documentFileName = fileList[0].name;
        this.onDocumentSelected(fileList[0]);
      }
    } else {
      if (type === 'profile') {
        this.fileName = 'No file selected';
      } else if (type === 'document') {
        this.documentFileName = 'No file selected';
      }
    }
  }

  updateImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.profileImage = e.target.result;
      localStorage.setItem('profileImage', e.target.result); // Save the image URL in local storage
    };
    reader.readAsDataURL(file);
  }

  onDocumentSelected(file: File): void {
    // Handle document file (medical license/university card) processing here
    // Example: You might want to upload it to a server or preview it in a different way
  }

  triggerFileInput(type: string): void {
    if (type === 'profile') {
      this.imageUpload.nativeElement.click();
    } else if (type === 'document') {
      this.documentUpload.nativeElement.click();
    }
  }
}
