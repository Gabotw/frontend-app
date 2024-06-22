import { Inject, Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Profile} from "../../../lawyers/model/profile.entity";

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css'
})
export class ConsultationComponent {

  constructor(
    public dialogRef: MatDialogRef<ConsultationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { profile: Profile }
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
