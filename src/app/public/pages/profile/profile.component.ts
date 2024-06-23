import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from "../../../user/model/user.entity";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  selectedLink: string | undefined;
  profileImage: string | ArrayBuffer | null = localStorage.getItem('profileImage') || "/assets/img/User.png";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  selectLink(s: string) {
    this.selectedLink = s;
  }
}
