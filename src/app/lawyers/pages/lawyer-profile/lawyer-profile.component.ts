import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Lawyer} from "../../../lawyers/model/lawyer.entity";
import {LawyerService} from "../../../lawyers/services/lawyer.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SubscriptionPayComponent} from "../../../public/pages/subscription-pay/subscription-pay.component";
import {Profile} from "../../model/profile.entity";
import {ProfileService} from "../../services/profile.service";


@Component({
  selector: 'app-lawyer-profile',
  templateUrl: './lawyer-profile.component.html',
  styleUrl: './lawyer-profile.component.css'
})

export class LawyerProfileComponent implements OnInit {
  profile: Profile = new Profile();

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    public dialogRef: MatDialogRef<LawyerProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.profileService.get(this.data.id).subscribe((profile: Profile) => {
      this.profile = profile;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  openSubscriptionPay() {
    this.dialog.open(SubscriptionPayComponent,
    {
      data:{
        lawyer: this.profile
      }
    });
  }
}
