import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-information-pay',
  templateUrl: './information-pay.component.html',
  styleUrl: './information-pay.component.css'
})
export class InformationPayComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
