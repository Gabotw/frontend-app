import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-subscription-pay',
  templateUrl: './subscription-pay.component.html',
  styleUrl: './subscription-pay.component.css'
})
export class SubscriptionPayComponent {
  constructor(public dialog: MatDialog) {  }

  closeDialog(){
    this.dialog.closeAll();
  }
}
