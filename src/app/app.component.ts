import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MedicDefense';
  options = [
    { path: '/Lawyers', title: 'Lawyers'},
    { path: '/summary', title: 'Summary'},
    { path: '/Subscription', title: 'Subscription'},
    { path: '/profile', title: 'Profile'},
    { path: '/educational resource', title: 'Educational Resource'},
    { path: '/landingPage', title: 'LandingPage'},
  ]
  constructor(private router: Router) {}
  shouldShowToolbar(){
    return !(this.router.url == '/sign-up' || this.router.url == '/sign-in'
    || this.router.url == '/lawyer-view' || this.router.url == '/lawyer-summary'
    || this.router.url == '/lawyer-profile');
  }
  shouldShowFooter(){
    return this.router.url !== '/sign-up' && this.router.url !== '/sign-in';
  }
}

