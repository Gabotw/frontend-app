import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Lawyer} from "../../../lawyers/model/lawyer.entity";
import {LawyerService} from "../../../lawyers/services/lawyer.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SubscriptionPayComponent} from "../../../public/pages/subscription-pay/subscription-pay.component";
import {Profile} from "../../../profile/model/profile.entity";
import {ProfileService} from "../../../profile/services/profile.service";

@Component({
  selector: 'app-lawyer-profile',
  templateUrl: './lawyer-profile.component.html',
  styleUrl: './lawyer-profile.component.css'
})

export class LawyerProfileComponent implements OnInit {
  lawyer: any;
  profile: any;
  lawyers: any[] = [];
  profiles: Profile[] = [];

  constructor(
    private route: ActivatedRoute,
    private lawyerService: LawyerService,
    private profileService: ProfileService,
    public dialogRef: MatDialogRef<LawyerProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) { this.lawyer = data.lawyer; }

  ngOnInit() {

    this.profileService.getAllProfiles().subscribe((profiles) => {
      this.profiles = profiles;

      this.lawyerService.getAllLawyers().subscribe((lawyers) => {
        this.lawyers = lawyers.map(lawyer => this.processLawyerData(lawyer));
      });
    });
  }

  private processLawyerData(lawyer: Lawyer): any {
    const profile = this.profiles.find(p => p.id === lawyer.profileId);

    return {
      ...lawyer,
      lawyerName: profile ? profile.fullName : '',
      email: profile ? profile.email : '',
      phoneNumber: profile ? profile.phoneNumber : '',
      dni: profile ? profile.dni : '',
      imageUrl: profile ? profile.img_url : '',
    };
  }

  closeDialog() {
    this.dialogRef.close();
  }

  openDialog(){
    this.dialog.open(SubscriptionPayComponent);
  }

}
