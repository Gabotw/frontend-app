import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-subscription-pay',
  templateUrl: './subscription-pay.component.html',
  styleUrl: './subscription-pay.component.css'
})
export class SubscriptionPayComponent {
  constructor(public dialog: MatDialog, private router: Router) {  }

  closeDialog(){
    this.dialog.closeAll();
  }

  goToLawyerSection(){
    this.router.navigate(['/Lawyers']).then(() => {});
    this.closeDialog();
  }
}
