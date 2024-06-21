import { Inject, Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lawyer } from "../../../lawyers/model/lawyer.entity";
@Component({
  selector: 'app-legal-case',
  templateUrl: './legal-case.component.html',
  styleUrl: './legal-case.component.css'
})
export class LegalCaseComponent {

  constructor(
  public dialogRef: MatDialogRef<LegalCaseComponent>,
  @Inject(MAT_DIALOG_DATA) public data: { lawyer: Lawyer }
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}


