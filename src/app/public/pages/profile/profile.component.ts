import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../../../user/model/user.entity";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user: User = new User();
  selectedLink: string | undefined;

  constructor(
    private route: ActivatedRoute,private router: Router
  ) { }

  shouldShow(){
    return this.router.url == '/lawyer-profile';
  }

  ngOnInit() {
  }

  selectLink(s: string) {

  }

}



