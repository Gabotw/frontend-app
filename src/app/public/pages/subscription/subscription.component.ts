import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SubscriptionPayComponent} from "../subscription-pay/subscription-pay.component";


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  constructor(public dialog: MatDialog) {  }

  openDialog(){
    const dialogRef = this.dialog.open(SubscriptionPayComponent);
  }
}
