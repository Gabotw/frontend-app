import {Component, OnInit} from '@angular/core';
import {Lawyer} from "../../../lawyers/model/lawyer.entity";
import {LawyerService} from "../../../lawyers/services/lawyer.service";
import { MatDialog } from '@angular/material/dialog';
import { LegalCaseComponent } from '../legal-case/legal-case.component';
import { ConsultationComponent } from '../consultation/consultation.component';
import {Profile} from "../../../profile/model/profile.entity";
import {ProfileService} from "../../../profile/services/profile.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-summary-section',
  templateUrl: './summary-section.component.html',
  styleUrl: './summary-section.component.css'
})
export class SummarySectionComponent implements OnInit {
  lawyers: any[] = [];
  profiles: Profile[] = [];

  constructor(
    private lawyerService: LawyerService,
    private profileService: ProfileService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    /*this.lawyerService.getAll().subscribe((lawyers) => {
      this.lawyers = lawyers.slice(0, 5); // Obtén solo los primeros 5 abogados
    });*/
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

  randomDate(): string {
    const start = new Date(2000, 0, 1);
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toLocaleDateString();
  }

  openLegalCaseDialog(lawyer: Lawyer): void {
    this.dialog.open(LegalCaseComponent, {
      data: { lawyer: lawyer}
    });
  }

  openConsultationDialog(lawyer: Lawyer): void {
    this.dialog.open(ConsultationComponent, {
      data: { lawyer: lawyer }
    });
  }

  shouldShow(){
    return this.router.url == '/lawyer-summary';
  }
}
