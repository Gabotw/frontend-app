import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SubscriptionPayComponent} from "../subscription-pay/subscription-pay.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  constructor(public dialog: MatDialog, private router: Router) {  }

  openDialog(){
    this.dialog.open(SubscriptionPayComponent);
  }

  goToSummarySection(){
    this.router.navigate(['/summary']);
  }

}
