import {Router} from "@angular/router";
import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import { SubscriptionDoneComponent} from "../subscription-done/subscription-done.component";

@Component({
  selector: 'app-subscription-pay',
  templateUrl: './subscription-pay.component.html',
  styleUrl: './subscription-pay.component.css'
})
export class SubscriptionPayComponent {
  cardNumber: string = '';
  amountPayable: string = '';
  expiryDate: string = '';
  securityCode: string = '';
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data:{lawyer: any}, private router:Router) {

  }

  openDialog(){
    this.dialog.open(SubscriptionDoneComponent);
  }


  closeDialog(){
    this.dialog.closeAll();
  }
}
