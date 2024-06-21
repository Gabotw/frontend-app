import {Component, OnInit} from '@angular/core';
import {Lawyer} from "../../../lawyers/model/lawyer.entity";
import {LawyerService} from "../../../lawyers/services/lawyer.service";
import { MatDialog } from '@angular/material/dialog';
import { LegalCaseComponent } from '../legal-case/legal-case.component';
import { ConsultationComponent } from '../consultation/consultation.component';

@Component({
  selector: 'app-summary-section',
  templateUrl: './summary-section.component.html',
  styleUrl: './summary-section.component.css'
})
export class SummarySectionComponent implements OnInit {
  lawyers: Lawyer[] = [];

  constructor(private lawyerService: LawyerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.lawyerService.getAll().subscribe((lawyers) => {
      this.lawyers = lawyers.slice(0, 5); // Obtén solo los primeros 5 abogados
    });
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
}
