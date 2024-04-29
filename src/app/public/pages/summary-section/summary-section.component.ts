import {Component, OnInit} from '@angular/core';
import {Lawyer} from "../../../lawyers/model/lawyer.entity";
import {LawyerService} from "../../../lawyers/services/lawyer.service";


@Component({
  selector: 'app-summary-section',
  templateUrl: './summary-section.component.html',
  styleUrl: './summary-section.component.css'
})
export class SummarySectionComponent implements OnInit {
  lawyers: Lawyer[] = [];

  constructor(private lawyerService: LawyerService) { }

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
}
