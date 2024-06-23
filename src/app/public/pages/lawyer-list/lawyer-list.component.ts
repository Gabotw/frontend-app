import { Component, OnInit } from '@angular/core';
import {Lawyer} from "../../../lawyers/model/lawyer.entity";
import {LawyerService} from "../../../lawyers/services/lawyer.service";
import { LawyerProfileComponent } from '../../../lawyers/pages/lawyer-profile/lawyer-profile.component';
import { MatDialog} from "@angular/material/dialog";
import {LawyerFilterComponent} from "../lawyer-filter/lawyer-filter.component";
import {Profile} from "../../../profile/model/profile.entity";
import {ProfileService} from "../../../profile/services/profile.service";

@Component({
  selector: 'app-lawyer-list',
  templateUrl: './lawyer-list.component.html',
  styleUrls: ['./lawyer-list.component.css']
})
export class LawyerListComponent implements OnInit {
  lawyers: any[] = [];
  profiles: Profile[] = [];

  filteredLawyers: any[] = [];
  searchTerm: string = '';

  constructor(
    private lawyerService: LawyerService,
    private profileService: ProfileService,
    public dialog: MatDialog
  )  { }

  ngOnInit(): void {
    /*this.lawyerService.getAll().subscribe((lawyers) => {
      this.lawyers = lawyers;
      this.filteredLawyers = lawyers;
    });*/

    this.profileService.getAllProfiles().subscribe((profiles) => {
      this.profiles = profiles;

      this.lawyerService.getAllLawyers().subscribe((lawyers) => {
        this.lawyers = lawyers.map(lawyer => this.processLawyerData(lawyer));
        this.filteredLawyers = [...this.lawyers];
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
      img_url: profile ? profile.img_url : ''
    };
  }

  search(): void {
    if (this.searchTerm) {
      this.filteredLawyers = this.lawyers.filter(lawyer =>
        lawyer.lawyerName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredLawyers = [...this.lawyers];
    }
  }

  /*openDialog(lawyerId: string){
    const dialogRef = this.dialog.open(LawyerProfileComponent, {
      data: { id: lawyerId }
    });
  }*/
  openDialog(lawyer: any){
    const dialogRef = this.dialog.open(LawyerProfileComponent, {
      data: { lawyer: lawyer }
    });
  }

  openFilterDialog() {
    this.dialog.open(LawyerFilterComponent);
  }
}
