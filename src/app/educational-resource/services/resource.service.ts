import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Resource} from "../model/resource.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResourceService extends BaseService<Resource>{
  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/educational-resources';
  }

}
