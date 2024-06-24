import {Inject, Component, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lawyer} from "../../../lawyers/model/lawyer.entity";
import {Profile} from "../../../profile/model/profile.entity";
import {LawyerService} from "../../../lawyers/services/lawyer.service";
import {ProfileService} from "../../../profile/services/profile.service";

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css'
})
export class ConsultationComponent implements OnInit {
  lawyer: any;
  profile: any;
  lawyers: any[] = [];
  profiles: Profile[] = [];
  constructor(
    public dialogRef: MatDialogRef<ConsultationComponent>,
    private lawyerService: LawyerService,
    private profileService: ProfileService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {  this.lawyer = data.lawyer; }

  ngOnInit(): void {

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
      phoneNumber: profile ? profile.phoneNumber : ''
    };
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
