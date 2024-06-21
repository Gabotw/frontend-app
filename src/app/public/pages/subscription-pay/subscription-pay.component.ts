import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {InformationPayComponent} from "../information-pay/information-pay.component";
import {Lawyer} from "../../../lawyers/model/lawyer.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-subscription-pay',
  templateUrl: './subscription-pay.component.html',
  styleUrl: './subscription-pay.component.css'
})
export class SubscriptionPayComponent {
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data:{lawyer: Lawyer},private router :Router) {  }

  closeDialog(){
    this.dialog.closeAll();
  }
  openPaymentInfo() {
    this.dialog.closeAll();
    this.dialog.open(InformationPayComponent, {
      data: {
        lawyerName: this.data.lawyer.name,
        userName: 'User Name',
        paymentDate: new Date().toLocaleDateString(),
        paymentTime: new Date().toLocaleTimeString(),
        amount: 'Amount'
      }
    });
   }
}
