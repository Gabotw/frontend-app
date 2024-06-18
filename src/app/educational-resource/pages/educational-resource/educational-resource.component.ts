import { Component, OnInit } from '@angular/core';
import {Resource} from "../../model/resource.entity";
import {ResourceService} from "../../services/resource.service";
import { MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-educational-resource',
  templateUrl: './educational-resource.component.html',
  styleUrls: ['./educational-resource.component.css']
})
export class EducationalResourceComponent implements OnInit {
  resources: Resource[] = [];

  constructor(private resourceService: ResourceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.resourceService.getAll().subscribe((resources) => {
      this.resources = resources;
    });
  }
}
