// src/app/public/pages/subscription-done/subscription-done.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subscription-done',
  templateUrl: './subscription-done.component.html',
  styleUrls: ['./subscription-done.component.css']
})
export class SubscriptionDoneComponent {

  constructor(
    public dialogRef: MatDialogRef<SubscriptionDoneComponent>,
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
