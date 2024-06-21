import {Router} from "@angular/router";
import {PaymentConfirmedComponent} from "../payment-confirmed/payment-confirmed.component";
import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {InformationPayComponent} from "../information-pay/information-pay.component";
import {Lawyer} from "../../../lawyers/model/lawyer.entity";

@Component({
  selector: 'app-subscription-pay',
  templateUrl: './subscription-pay.component.html',
  styleUrl: './subscription-pay.component.css'
})
export class SubscriptionPayComponent {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data:{lawyer: Lawyer}) {  }


  closeDialog(){
    this.dialog.closeAll();
  }

  goToLawyerSection(){
    this.router.navigate(['/Lawyers']).then(() => {});
    this.closeDialog();
  }

  openPaymentConfirmedDialog(){
    this.dialog.open(PaymentConfirmedComponent);

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
