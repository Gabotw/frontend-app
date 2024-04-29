import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-lawyer-filter',
  templateUrl: './lawyer-filter.component.html',
  styleUrl: './lawyer-filter.component.css'
})
export class LawyerFilterComponent {
  constructor(public dialog: MatDialog) { }

  closeDialog() {
    this.dialog.closeAll();
  }
}
