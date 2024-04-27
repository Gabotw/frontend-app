import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Lawyer} from "../model/lawyer.entity";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LawyerService extends BaseService<Lawyer>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/lawyers';
  }
}
