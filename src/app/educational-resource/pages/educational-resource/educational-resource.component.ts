import {Component, Inject, OnInit} from '@angular/core';
import {Resource} from "../../model/resource.entity";
import {ActivatedRoute} from "@angular/router";
import {ResourceService} from "../../services/resource.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-educational-resource',
  templateUrl: './educational-resource.component.html',
  styleUrl: './educational-resource.component.css'
})
export class EducationalResourceComponent implements OnInit {
  resource: Resource = new Resource();
  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService,
    public dialogRef: MatDialogRef<EducationalResourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.resourceService.get(this.data.id).subscribe((resource: Resource) => {
      this.resource = resource;
    });
  }
}
