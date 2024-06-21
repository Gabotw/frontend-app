import { Component, OnInit } from '@angular/core';
import {Lawyer} from "../../../lawyers/model/lawyer.entity";
import {LawyerService} from "../../../lawyers/services/lawyer.service";
import { LawyerProfileComponent } from '../../../lawyers/pages/lawyer-profile/lawyer-profile.component';
import { MatDialog} from "@angular/material/dialog";
import {LawyerFilterComponent} from "../lawyer-filter/lawyer-filter.component";

@Component({
  selector: 'app-lawyer-list',
  templateUrl: './lawyer-list.component.html',
  styleUrls: ['./lawyer-list.component.css']
})
export class LawyerListComponent implements OnInit {
  lawyers: Lawyer[] = [];
  filteredLawyers: Lawyer[] = [];
  searchTerm: string = '';

  constructor(private lawyerService: LawyerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.lawyerService.getAll().subscribe((lawyers) => {
      this.lawyers = lawyers;
      this.filteredLawyers = lawyers;
    });
  }
  search(): void {
    if (this.searchTerm) {
      this.filteredLawyers = this.lawyers.filter(lawyer =>
        lawyer.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredLawyers = this.lawyers;
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
}
