import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Lawyer} from "../../../lawyers/model/lawyer.entity";
import {LawyerService} from "../../../lawyers/services/lawyer.service";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-lawyer-profile',
  templateUrl: './lawyer-profile.component.html',
  styleUrl: './lawyer-profile.component.css'
})

export class LawyerProfileComponent implements OnInit {
  lawyer: Lawyer = new Lawyer();

  constructor(
    private route: ActivatedRoute,
    private lawyerService: LawyerService,
    public dialogRef: MatDialogRef<LawyerProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.lawyerService.get(this.data.id).subscribe((lawyer: Lawyer) => {
      this.lawyer = lawyer;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
