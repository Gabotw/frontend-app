import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-payment-confirmed',
  templateUrl: './payment-confirmed.component.html',
  styleUrl: './payment-confirmed.component.css'
})
export class PaymentConfirmedComponent {
  constructor(public dialog: MatDialog) {  }

  closeDialog(){
    this.dialog.closeAll();
  }

}
