import { Component, OnInit } from '@angular/core';
import {Lawyer} from "../../../lawyers/model/lawyer.entity";
import {LawyerService} from "../../../lawyers/services/lawyer.service";
import { LawyerProfileComponent } from '../../../lawyers/pages/lawyer-profile/lawyer-profile.component';
import { MatDialog} from "@angular/material/dialog";
import {LawyerFilterComponent} from "../lawyer-filter/lawyer-filter.component";
import {Profile} from "../../../lawyers/model/profile.entity";
import {ProfileService} from "../../../lawyers/services/profile.service";

@Component({
  selector: 'app-lawyer-list',
  templateUrl: './lawyer-list.component.html',
  styleUrls: ['./lawyer-list.component.css']
})
export class LawyerListComponent implements OnInit {
  lawyers: Lawyer[] = [];
  profiles: Profile[] = [];
  filteredProfiles: Profile[] = [];
  searchTerm: string = '';

  constructor(private lawyerService: LawyerService, private profileService: ProfileService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.lawyerService.getAll().subscribe((lawyers) => {
      this.lawyers = lawyers;
    });
    this.profileService.getAll().subscribe((profiles) => {
      this.profiles = profiles;
      this.filteredProfiles = profiles;
    });
  }
  search(): void {
    if (this.searchTerm) {
      this.filteredProfiles = this.profiles.filter(profile =>
        profile.fullName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredProfiles = this.profiles;
    }
  }

  openDialog(lawyerId: number){
    const dialogRef = this.dialog.open(LawyerProfileComponent, {
      data: { id: lawyerId }
    });
  }

  openFilterDialog() {
    this.dialog.open(LawyerFilterComponent);
  }

  protected readonly Lawyer = Lawyer;
}
