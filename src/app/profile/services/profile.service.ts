import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Profile} from "../model/profile.entity";


@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService<Profile>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/profiles';
  }
}
